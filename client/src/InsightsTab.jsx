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
import { parseISO, startOfWeek, format, getDay } from "date-fns";
import "./style/InsightsTab.css";

ChartJS.register(
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
  MatrixController,
  MatrixElement
);

const DEFAULT_COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#d888e1",
  "#b2a4ff",
  "#f68d8d",
];

// Helper to remove "Paid to" / "Received from" prefixes
const sanitizeDetails = (details) => {
  if (!details) return "";
  return details
    .toString()
    .replace(/^Paid to\s*/i, "")
    .replace(/^Received from\s*/i, "")
    .trim();
};

function aggregateTopN(transactions, txnType, topN = 8) {
  const map = {};
  transactions.forEach((t) => {
    const amt = Number(t.Amount || 0);
    if (!amt || isNaN(amt)) return;
    const type = (t.Type || "").toUpperCase();
    if (txnType === "DEBIT" && type !== "DEBIT") return;
    if (txnType === "CREDIT" && type !== "CREDIT") return;

    const key =
      sanitizeDetails(t.Details) ||
      (t.Account && t.Account.toString().trim()) ||
      "Unknown";
    map[key] = (map[key] || 0) + amt;
  });

  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const top = entries.slice(0, topN);
  const others = entries.slice(topN);
  const othersSum = others.reduce((s, [, v]) => s + v, 0);

  const labels = top.map(([k]) => k);
  const data = top.map(([, v]) => v);

  if (othersSum > 0) {
    labels.push("Others");
    data.push(othersSum);
  }

  return { labels, data };
}

function aggregateSpending(transactions, view = "daily") {
  const map = {};
  transactions.forEach((t) => {
    const amt = Number(t.Amount || 0);
    if (!amt || isNaN(amt)) return;
    if ((t.Type || "").toUpperCase() !== "DEBIT") return;

    let txnDate;
    if (t.Date instanceof Date) txnDate = t.Date;
    else if (typeof t.Date === "string") {
      const parsed = parseISO(t.Date);
      if (isNaN(parsed)) return;
      txnDate = parsed;
    } else return;

    let dateKey = null;
    if (view === "daily") dateKey = format(txnDate, "yyyy-MMM-dd");
    else if (view === "weekly") {
      const weekStart = startOfWeek(txnDate, { weekStartsOn: 1 });
      dateKey = format(weekStart, "yyyy-MMM-dd");
    } else if (view === "monthly") dateKey = format(txnDate, "yyyy-MMM");

    map[dateKey] = (map[dateKey] || 0) + amt;
  });

  const sortedKeys = Object.keys(map).sort((a, b) => new Date(a) - new Date(b));
  return { labels: sortedKeys, data: sortedKeys.map((k) => map[k]) };
}

function aggregateHeatmap(transactions, view = "weekly") {
  const heatmapData = {};

  transactions.forEach((t) => {
    if ((t.Type || "").toUpperCase() !== "DEBIT") return;
    const amt = Number(t.Amount || 0);
    if (!amt || isNaN(amt)) return;

    let txnDate;
    if (t.Date instanceof Date) txnDate = t.Date;
    else if (typeof t.Date === "string") {
      const parsed = parseISO(t.Date);
      if (isNaN(parsed)) return;
      txnDate = parsed;
    } else return;

    let weekKey = format(startOfWeek(txnDate, { weekStartsOn: 1 }), "yyyy-MM-dd");

    if (view === "monthly") {
      weekKey = format(txnDate, "yyyy-MMM");
    } else if (view === "daily") {
      weekKey = format(txnDate, "yyyy-MMM-dd");
    }

    const day = getDay(txnDate);
    const key = `${weekKey}-${day}`;

    heatmapData[key] = {
      x: weekKey,
      y: day,
      v: (heatmapData[key]?.v || 0) + amt,
    };
  });

  return Object.values(heatmapData);
}

function aggregateRecurring(transactions) {
  const recurringMap = {};
  transactions.forEach((t) => {
    const amt = Number(t.Amount || 0);
    const type = (t.Type || "").toUpperCase();
    if (type !== "DEBIT" || !amt) return;
    const user = sanitizeDetails(t.Details) || "Unknown";
    const key = `${user}||${Number(amt).toFixed(2)}`;
    recurringMap[key] = recurringMap[key] || { user, amount: Number(amt), dates: [] };
    recurringMap[key].dates.push(t.Date ? new Date(t.Date) : null);
  });

  return Object.values(recurringMap)
    .filter((entry) => entry.dates.length >= 2)
    .map((entry) => ({
      user: entry.user,
      amount: entry.amount,
      count: entry.dates.length,
      total: entry.amount * entry.dates.length,
    }))
    .sort((a, b) => b.total - a.total);
}

export default function InsightsTab({ transactions = [] }) {
  const [trendView, setTrendView] = useState("daily");
  const [heatmapView, setHeatmapView] = useState("weekly");
  const [showAllRecurring, setShowAllRecurring] = useState(false);
  const [countSortDir, setCountSortDir] = useState("desc");

  const { debitChart, creditChart, spendingTrend, recurringPayments, heatmapData } =
    useMemo(() => {
      const debitAgg = aggregateTopN(transactions, "DEBIT", 8);
      const creditAgg = aggregateTopN(transactions, "CREDIT", 8);
      const spendingAgg = aggregateSpending(transactions, trendView);
      const recurringAgg = aggregateRecurring(transactions);
      const heatmapAgg = aggregateHeatmap(transactions, heatmapView);

      const debitColors = debitAgg.labels.map(
        (_, i) => DEFAULT_COLORS[i % DEFAULT_COLORS.length]
      );

      return {
        debitChart: {
          labels: debitAgg.labels,
          datasets: [
            {
              data: debitAgg.data,
              backgroundColor: debitColors,
              borderWidth: 0,
            },
          ],
        },
        creditChart: {
          labels: creditAgg.labels,
          datasets: [
            {
              label: "Amount (₹)",
              data: creditAgg.data,
              backgroundColor: DEFAULT_COLORS[1],
            },
          ],
        },
        spendingTrend: {
          labels: spendingAgg.labels,
          datasets: [
            {
              label: "Spending (₹)",
              data: spendingAgg.data,
              fill: false,
              borderColor: "#ff6384",
              backgroundColor: "#ff6384",
              tension: 0.3,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        recurringPayments: recurringAgg,
        heatmapData: heatmapAgg,
      };
    }, [transactions, trendView, heatmapView]);

  const sortedRecurring = useMemo(() => {
    if (!recurringPayments || recurringPayments.length === 0) return [];
    const arr = [...recurringPayments];
    arr.sort((a, b) =>
      countSortDir === "asc" ? a.count - b.count : b.count - a.count
    );
    return arr;
  }, [recurringPayments, countSortDir]);

  const displayedRecurring = showAllRecurring
    ? sortedRecurring
    : sortedRecurring.slice(0, 10);

  const toggleCountSort = () => {
    setCountSortDir((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="insights-card" style={{ padding: 20, background: "#fff", borderRadius: 12 }}>
        <p>No data available for insights. Upload a statement to see charts.</p>
      </div>
    );
  }

  const pieOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } };
  const barOptions = { responsive: true, maintainAspectRatio: false };
  const lineOptions = { responsive: true, maintainAspectRatio: false };

  const heatmapOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { type: "category", offset: true, title: { display: true, text: heatmapView } },
      y: {
        type: "category",
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        title: { display: true, text: "Day" },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `₹${ctx.raw.v.toLocaleString()} spent on ${ctx.chart.scales.y.ticks[ctx.raw.y].label}`,
        },
      },
    },
  };

const heatmapChart = {
  labels: [],
  datasets: [
    {
      label: "Spending Heatmap",
      data: heatmapData,
      backgroundColor: (ctx) => {
        const dataPoint = ctx.dataset.data[ctx.dataIndex];
        if (!dataPoint || !dataPoint.v) return "rgba(200,200,200,0.2)"; // fallback color
        const max = Math.max(...heatmapData.map((d) => d.v));
        const intensity = max ? dataPoint.v / max : 0;
        return `rgba(255, 99, 132, ${intensity})`;
      },
      width: () => 20,
      height: () => 20,
    },
  ],
};

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
      <h3>Data Insights & Visualization</h3>

      {/* Top Debit & Credit */}
      <div className="insights-grid">
        <div className="insights-card" style={{ height: 280 }}>
          <Pie data={debitChart} options={pieOptions} />
        </div>
        <div className="insights-card" style={{ height: 280 }}>
          <Bar data={creditChart} options={barOptions} />
        </div>
      </div>

      <div className="insights-card" style={{ marginTop: 20, height: 340 }}>
        <div className="insights-control">
          <select
            value={trendView}
            onChange={(e) => setTrendView(e.target.value)}
            className="dropdown dropdown-purple"
          >
            <option value="daily" className="dropdown-option">Daily</option>
            <option value="weekly" className="dropdown-option">Weekly</option>
            <option value="monthly" className="dropdown-option">Monthly</option>
          </select>
        </div>
        <Line data={spendingTrend} options={lineOptions} />
      </div>

      {/* Spending Heatmap */}
      <div className="insights-card" style={{ marginTop: 20, height: 340 }}>
        <div className="insights-control">
          <select
            value={heatmapView}
            onChange={(e) => setHeatmapView(e.target.value)}
            className="dropdown dropdown-pink"
          >
            <option value="daily" className="dropdown-option">Daily</option>
            <option value="weekly" className="dropdown-option">Weekly</option>
            <option value="monthly" className="dropdown-option">Monthly</option>
          </select>
        </div>
        <Bar type="matrix" data={heatmapChart} options={heatmapOptions} />
      </div>

      {/* Recurring Payments Table */}
      <div className="insights-card" style={{ marginTop: 20 }}>
        <div className="insights-header">
          <h4>Recurring Payments</h4>
          <div>
            {recurringPayments.length > 10 && (
              <button
                onClick={() => setShowAllRecurring(!showAllRecurring)}
                className={`toggle-btn ${showAllRecurring ? "toggle-btn-red" : "toggle-btn-green"}`}
              >
                {showAllRecurring ? "Show Less" : `Show All (${recurringPayments.length})`}
              </button>
            )}
          </div>
        </div>

        {recurringPayments.length ? (
          <div style={{ overflowX: "auto", marginTop: 8 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid #12d72fff" }}>
                  <th style={{ padding: 8 }}>Details</th>
                  <th style={{ padding: 8 }}>Amount (₹)</th>
                  <th
                    style={{ padding: 8, cursor: "pointer", userSelect: "none" }}
                    onClick={toggleCountSort}
                    title="Click to sort by count"
                  >
                    Count{" "}
                    <span style={{ fontSize: 12 }}>
                      {countSortDir === "desc" ? "▼" : "▲"}
                    </span>
                  </th>
                  <th style={{ padding: 8 }}>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {displayedRecurring.map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: 8 }}>{r.user}</td>
                    <td style={{ padding: 8 }}>{r.amount.toFixed(2)}</td>
                    <td style={{ padding: 8 }}>{r.count}</td>
                    <td style={{ padding: 8 }}>{r.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ marginTop: 8 }}>No recurring payments detected.</p>
        )}
      </div>
    </div>
  );
}