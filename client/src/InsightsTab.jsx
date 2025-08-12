// client/src/InsightsTab.jsx
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
import "chartjs-adapter-date-fns";
import { parseISO, startOfWeek, format } from "date-fns";

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
  TimeScale
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

function aggregateTopN(transactions, txnType, topN = 8) {
  const map = {};
  transactions.forEach((t) => {
    const amt = Number(t.Amount || 0);
    if (!amt || isNaN(amt)) return;
    const type = (t.Type || "").toUpperCase();
    if (txnType === "DEBIT" && type !== "DEBIT") return;
    if (txnType === "CREDIT" && type !== "CREDIT") return;

    const key =
      (t.Details && t.Details.toString().trim()) ||
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
    if (t.Date instanceof Date) {
      txnDate = t.Date;
    } else if (typeof t.Date === "string") {
      const parsed = parseISO(t.Date);
      if (isNaN(parsed)) return; // skip invalid date
      txnDate = parsed;
    } else {
      return; // skip if date is missing or in unknown format
    }

    let dateKey = null;

    if (view === "daily") {
      dateKey = format(txnDate, "yyyy-MMM-dd");
    } else if (view === "weekly") {
      const weekStart = startOfWeek(txnDate, { weekStartsOn: 1 }); // Monday start
      dateKey = format(weekStart, "yyyy-MMM-dd");
    } else if (view === "monthly") {
      dateKey = format(txnDate, "yyyy-MMM");
    }

    map[dateKey] = (map[dateKey] || 0) + amt;
  });

  const sortedKeys = Object.keys(map).sort((a, b) => new Date(a) - new Date(b));
  return {
    labels: sortedKeys,
    data: sortedKeys.map((k) => map[k]),
  };
}


export default function InsightsTab({ transactions = [] }) {
  const [trendView, setTrendView] = useState("daily");

  const { debitChart, creditChart, spendingTrend } = useMemo(() => {
    const debitAgg = aggregateTopN(transactions, "DEBIT", 8);
    const creditAgg = aggregateTopN(transactions, "CREDIT", 8);
    const spendingAgg = aggregateSpending(transactions, trendView);

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
    };
  }, [transactions, trendView]);

  if (!transactions || transactions.length === 0) {
    return (
      <div className="insights-card" style={{ padding: 20, background: "#fff", borderRadius: 12 }}>
        <p>No data available for insights. Upload a statement to see charts.</p>
      </div>
    );
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 12 } },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const v = ctx.parsed ?? ctx.raw ?? 0;
            return `₹${Number(v).toLocaleString()}`;
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `₹${Number(ctx.parsed.y ?? ctx.parsed).toLocaleString()}`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { callback: (v) => `₹${v}` },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
    scales: {
      x: {
        type: "category",
        ticks: { maxRotation: 45, minRotation: 0 },
      },
      y: {
        beginAtZero: true,
        ticks: { callback: (v) => `₹${v}` },
      },
    },
  };

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 18px rgba(20,20,40,0.04)" }}>
      <h3 style={{ marginBottom: 12 }}>Data Insights & Visualization</h3>

      {/* Top Debit Payees & Top Credit Senders */}
      <div className="insights-grid">
        <div className="insights-card">
          <div className="insights-header"><h4>Top Debit Payees</h4></div>
          <div className="insights-chart">
            <Pie data={debitChart} options={pieOptions} />
          </div>
        </div>

        <div className="insights-card">
          <div className="insights-header"><h4>Top Credit Senders</h4></div>
          <div className="insights-chart">
            <Bar data={creditChart} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Spending Trend */}
      <div className="insights-card" style={{ marginTop: 20 }}>
        <div className="insights-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h4>Spending Trend</h4>
          <select
            value={trendView}
            onChange={(e) => setTrendView(e.target.value)}
            style={{ padding: "4px 8px", borderRadius: 6, border: "1px solid #ccc" }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly (Mon-Sun)</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="insights-chart" style={{ height: 300 }}>
          <Line data={spendingTrend} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}
