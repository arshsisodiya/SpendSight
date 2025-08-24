import React, { useMemo, useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  TimeScale,
} from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import "chartjs-adapter-date-fns";
import {
  parseISO,
  startOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isValid,
} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Ensure you import the updated CSS file
import "./style/InsightsTab.css";

// ChartJS registrations remain the same...
ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement, TimeScale, MatrixController, MatrixElement);

// Helper functions (DEFAULT_COLORS, sanitizeDetails, aggregations) remain the same...
const DEFAULT_COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c", "#d0ed57", "#d888e1", "#b2a4ff", "#f68d8d"];
const sanitizeDetails = (details) => { if (!details) return ""; return details.toString().replace(/^Paid to\s*/i, "").replace(/^Received from\s*/i, "").trim(); };
function aggregateTopN(transactions, txnType, topN = 8) { const map = {}; transactions.forEach((t) => { const amt = Number(t.Amount || 0); if (!amt || isNaN(amt)) return; const type = (t.Type || "").toUpperCase(); if (txnType === "DEBIT" && type !== "DEBIT") return; if (txnType === "CREDIT" && type !== "CREDIT") return; const key = sanitizeDetails(t.Details) || (t.Account && t.Account.toString().trim()) || "Unknown"; map[key] = (map[key] || 0) + amt; }); const entries = Object.entries(map).sort((a, b) => b[1] - a[1]); const top = entries.slice(0, topN); const others = entries.slice(topN); const othersSum = others.reduce((s, [, v]) => s + v, 0); const labels = top.map(([k]) => k); const data = top.map(([, v]) => v); if (othersSum > 0) { labels.push("Others"); data.push(othersSum); } return { labels, data }; }
function aggregateSpending(transactions, view = "daily") { const map = {}; transactions.forEach((t) => { const amt = Number(t.Amount || 0); if (!amt || isNaN(amt)) return; let txnDate; if (t.Date instanceof Date) txnDate = t.Date; else if (typeof t.Date === "string") { const parsed = parseISO(t.Date); if (!isValid(parsed)) return; txnDate = parsed; } else return; let dateKey; if (view === "daily") dateKey = format(txnDate, "yyyy-MMM-dd"); else if (view === "weekly") dateKey = format(startOfWeek(txnDate, { weekStartsOn: 1 }), "yyyy-MMM-dd"); else if (view === "monthly") dateKey = format(txnDate, "yyyy-MMM"); map[dateKey] = (map[dateKey] || 0) + amt; }); const sortedKeys = Object.keys(map).sort((a, b) => new Date(a) - new Date(b)); return { labels: sortedKeys, data: sortedKeys.map((k) => map[k]) }; }
function aggregateHeatmap(transactions, view = "weekly") { const heatmapData = {}; transactions.forEach((t) => { const amt = Number(t.Amount || 0); if (!amt || isNaN(amt)) return; let txnDate; if (t.Date instanceof Date) txnDate = t.Date; else if (typeof t.Date === "string") { const parsed = parseISO(t.Date); if (!isValid(parsed)) return; txnDate = parsed; } else return; let periodKey = format(startOfWeek(txnDate, { weekStartsOn: 1 }), "yyyy-MM-dd"); if (view === "monthly") periodKey = format(txnDate, "yyyy-MMM"); else if (view === "daily") periodKey = format(txnDate, "yyyy-MMM-dd"); const key = `${periodKey}-${getDay(txnDate)}`; heatmapData[key] = { x: periodKey, y: getDay(txnDate), v: (heatmapData[key]?.v || 0) + amt, }; }); return Object.values(heatmapData); }
function aggregateRecurring(transactions) { const recurringMap = {}; transactions.forEach((t) => { const amt = Number(t.Amount || 0); const type = (t.Type || "").toUpperCase(); if (type !== "DEBIT" || !amt) return; const user = sanitizeDetails(t.Details) || "Unknown"; const key = `${user}||${amt.toFixed(2)}`; if (!recurringMap[key]) { recurringMap[key] = { user, amount: amt, dates: [] }; } recurringMap[key].dates.push(t.Date ? new Date(t.Date) : null); }); return Object.values(recurringMap).filter((entry) => entry.dates.length >= 2).map((entry) => ({ user: entry.user, amount: entry.amount, count: entry.dates.length, total: entry.amount * entry.dates.length, })).sort((a, b) => b.total - a.total); }


export default function InsightsTab({ transactions = [] }) {
  const [trendView, setTrendView] = useState("daily");
  const [heatmapView, setHeatmapView] = useState("weekly");
  const [showAllRecurring, setShowAllRecurring] = useState(false);
  const [countSortDir, setCountSortDir] = useState("desc");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [chartMode, setChartMode] = useState("DEBIT");

  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const filteredTransactions = useMemo(() => {
    if (!startDate && !endDate) return transactions;
    return transactions.filter((t) => {
      const txnDate = t.Date instanceof Date ? t.Date : parseISO(t.Date);
      if (!isValid(txnDate)) return false;
      if (startDate && isBefore(txnDate, startDate)) return false;
      if (endDate && isAfter(txnDate, endDate)) return false;
      return true;
    });
  }, [transactions, startDate, endDate]);

  const { chartData, spendingTrend, recurringPayments, heatmapData } = useMemo(() => {
    const agg = aggregateTopN(filteredTransactions, chartMode, 8);
    const spendingAgg = aggregateSpending(filteredTransactions.filter((t) => (t.Type || "").toUpperCase() === chartMode), trendView);
    const recurringAgg = aggregateRecurring(filteredTransactions);
    const heatmapAgg = aggregateHeatmap(filteredTransactions.filter((t) => (t.Type || "").toUpperCase() === chartMode), heatmapView);
    const colors = agg.labels.map((_, i) => DEFAULT_COLORS[i % DEFAULT_COLORS.length]);
    return {
      chartData: {
        pie: { labels: agg.labels, datasets: [{ data: agg.data, backgroundColor: colors, borderWidth: 0 }] },
        bar: { labels: agg.labels, datasets: [{ label: "Amount (₹)", data: agg.data, backgroundColor: colors.map((c) => c + "aa"), borderRadius: 8 }] },
      },
      spendingTrend: { labels: spendingAgg.labels, datasets: [{ label: `${chartMode} Spending (₹)`, data: spendingAgg.data, borderColor: "#ff6384", backgroundColor: "#ff6384", fill: false, tension: 0.3, pointRadius: 4, pointHoverRadius: 6 }] },
      recurringPayments: recurringAgg,
      heatmapData: heatmapAgg,
    };
  }, [filteredTransactions, trendView, heatmapView, chartMode]);

  const sortedRecurring = useMemo(() => {
    if (!recurringPayments?.length) return [];
    return [...recurringPayments].sort((a, b) => countSortDir === "asc" ? a.count - b.count : b.count - a.count);
  }, [recurringPayments, countSortDir]);

  const displayedRecurring = showAllRecurring ? sortedRecurring : sortedRecurring.slice(0, 10);

  if (!transactions?.length) {
    return (
      <div className="insights-card">
        <p>No data available for insights. Upload a statement to see charts.</p>
      </div>
    );
  }

  // Chart options objects remain the same...
  const pieOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" }, title: { display: true, text: `${chartMode} Top Payees` } }, };
  const barOptions = { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: `${chartMode} Top Payees` } }, };
  const lineOptions = { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: `${chartMode} Spending Trend (${trendView})` } }, };
  const heatmapOptions = { responsive: true, maintainAspectRatio: false, scales: { x: { type: "category", offset: true, title: { display: true, text: heatmapView } }, y: { type: "category", labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], title: { display: true, text: "Day" }, }, }, plugins: { tooltip: { callbacks: { label: (ctx) => `₹${ctx.raw.v.toLocaleString()} spent on ${ctx.chart.scales.y.ticks[ctx.raw.y].label}`, }, }, }, };
  const heatmapChart = { labels: [], datasets: [{ label: `${chartMode} Heatmap`, data: heatmapData, backgroundColor: (ctx) => { const d = ctx.dataset.data[ctx.dataIndex]; if (!d?.v) return "rgba(200,200,200,0.2)"; const max = Math.max(...heatmapData.map((d) => d.v)); const intensity = max ? d.v / max : 0; return `rgba(255, 99, 132, ${intensity})`; }, width: () => 20, height: () => 20, }], };


  return (
    // MODIFIED: Replaced inline style with a class name
    <div className="insights-container">
      <h3>Data Insights & Visualization</h3>

      <div className="insights-header">
        <div className="date-picker-container">
          <div className="datepicker-icon-wrapper">
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              dateFormat="yyyy-MM-dd"
              className="custom-datepicker"
              maxDate={endDate}
            />
            <span className="calendar-icon">📅</span>
          </div>
          <div className="datepicker-icon-wrapper">
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End Date"
              dateFormat="yyyy-MM-dd"
              className="custom-datepicker"
              minDate={startDate}
            />
            <span className="calendar-icon">📅</span>
          </div>
          {(startDate || endDate) && (
            <button className="reset-btn" onClick={handleResetDates}>
              Reset
            </button>
          )}
        </div>

        <button
          onClick={() => setChartMode((prev) => (prev === "DEBIT" ? "CREDIT" : "DEBIT"))}
          className={`toggle-btn ${chartMode === "DEBIT" ? "debit-mode" : "credit-mode"}`}
        >
          {chartMode === "DEBIT" ? "Showing Debit" : "Showing Credit"}
        </button>
      </div>

      <div className="insights-grid">
        {/* MODIFIED: Removed inline style and added a wrapper for responsive height */}
        <div className="insights-card">
          <div className="chart-wrapper">
            <Pie data={chartData.pie} options={pieOptions} />
          </div>
        </div>
        <div className="insights-card">
          <div className="chart-wrapper">
            <Bar data={chartData.bar} options={barOptions} />
          </div>
        </div>
      </div>

      <div className="insights-card chart-card">
        <div className="insights-header">
          <h4>{chartMode} Spending Trend</h4>
          <select value={trendView} onChange={(e) => setTrendView(e.target.value)} className="dropdown">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="chart-wrapper">
          <Line data={spendingTrend} options={lineOptions} />
        </div>
      </div>

      <div className="insights-card chart-card">
        <div className="insights-header">
          <h4>{chartMode} Spending Heatmap</h4>
          <select value={heatmapView} onChange={(e) => setHeatmapView(e.target.value)} className="dropdown">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="chart-wrapper">
          <Bar type="matrix" data={heatmapChart} options={heatmapOptions} />
        </div>
      </div>

      <div className="insights-card">
        <div className="insights-header">
          <h4>Recurring Payments</h4>
          {recurringPayments.length > 10 && (
            <button
              onClick={() => setShowAllRecurring(!showAllRecurring)}
              className="recurring-toggle"
            >
              {showAllRecurring ? "Show Less" : `Show All (${recurringPayments.length})`}
            </button>
          )}
        </div>
        {recurringPayments.length > 0 ? (
          // MODIFIED: Added a responsive wrapper for the table
          <div className="table-responsive-wrapper">
            <table className="recurring-payments-table">
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Amount (₹)</th>
                  <th
                    className="sortable-header"
                    onClick={() => setCountSortDir((prev) => (prev === "desc" ? "asc" : "desc"))}
                    title="Click to sort by count"
                  >
                    Count {countSortDir === "desc" ? "▼" : "▲"}
                  </th>
                  <th>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {displayedRecurring.map((r, idx) => (
                  <tr key={idx}>
                    <td>{r.user}</td>
                    <td>{r.amount.toFixed(2)}</td>
                    <td>{r.count}</td>
                    <td>{r.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No recurring payments detected.</p>
        )}
      </div>
    </div>
  );
}
