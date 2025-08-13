import React, { useMemo } from "react";

// Helper to remove "Paid to" or "Received from" prefixes
function sanitizeDetails(details) {
  if (!details) return "Unknown";
  let d = details.toString().trim();
  d = d.replace(/^Paid to\s*/i, "").replace(/^Received from\s*/i, "");
  return d || "Unknown";
}

export default function SummaryTab({ transactions = [] }) {
  const summary = useMemo(() => {
    if (!transactions.length) return null;

    const debitByDate = {};
    const debitByHour = {};
    const debitByUser = {};
    const creditByUser = {};

    transactions.forEach((t) => {
      const amt = Number(t.Amount || 0);
      const type = (t.Type || "").toUpperCase();
      const dateObj = t.Date ? new Date(t.Date) : null;

      if (!isNaN(amt) && dateObj) {
        const dateStr = dateObj.toLocaleDateString();
        const hour = dateObj.getHours();

        if (type === "DEBIT") {
          debitByDate[dateStr] = (debitByDate[dateStr] || 0) + amt;
          debitByHour[hour] = (debitByHour[hour] || 0) + amt;

          const user = sanitizeDetails(t.Details);
          debitByUser[user] = (debitByUser[user] || 0) + amt;
        }

        if (type === "CREDIT") {
          const user = sanitizeDetails(t.Details);
          creditByUser[user] = (creditByUser[user] || 0) + amt;
        }
      }
    });

    const mostSpentDay =
      Object.entries(debitByDate).sort((a, b) => b[1] - a[1])[0] || [];

    const mostSpentHour =
      Object.entries(debitByHour).sort((a, b) => b[1] - a[1])[0] || [];

    const topDebitUsers = Object.entries(debitByUser)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topCreditUsers = Object.entries(creditByUser)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return {
      mostSpentDay: { date: mostSpentDay[0], amount: mostSpentDay[1] || 0 },
      mostSpentHour: {
        hour: mostSpentHour[0],
        amount: mostSpentHour[1] || 0,
      },
      topDebitUsers,
      topCreditUsers,
    };
  }, [transactions]);

  if (!summary) return null;

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 6px 18px rgba(20,20,40,0.04)",
      }}
    >
      <h3>Summary</h3>
      <ul style={{ lineHeight: 1.8, marginBottom: 20 }}>
        <li>
          📅 <strong>Most Spent Day:</strong> {summary.mostSpentDay.date} — ₹
          {summary.mostSpentDay.amount.toFixed(2)}
        </li>
        <li>
          ⏰ <strong>Most Active Spending Time:</strong>{" "}
          {summary.mostSpentHour.hour
            ? `${summary.mostSpentHour.hour}:00 - ${summary.mostSpentHour.hour}:59`
            : "N/A"}{" "}
          — ₹{summary.mostSpentHour.amount.toFixed(2)}
        </li>
      </ul>

      {/* Side-by-side columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#f9fafb",
            padding: 16,
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          }}
        >
          <h4 style={{ marginBottom: 8 }}>💸 Top 5 Payees (Debit)</h4>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {summary.topDebitUsers.map(([user, amount], idx) => (
              <li key={idx} style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 500 }}>{user}</span> — ₹
                {amount.toFixed(2)}
              </li>
            ))}
          </ol>
        </div>

        <div
          style={{
            background: "#f9fafb",
            padding: 16,
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          }}
        >
          <h4 style={{ marginBottom: 8 }}>💰 Top 5 Senders (Credit)</h4>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {summary.topCreditUsers.map(([user, amount], idx) => (
              <li key={idx} style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 500 }}>{user}</span> — ₹
                {amount.toFixed(2)}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
