import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";
import SummaryTab from "./SummaryTab";
import InsightsTab from "./InsightsTab";
import "./App.css"; // Consistent padding & spacing
import "./style/Dashboard.css";
import "./style/PdfUpload.css"; // Ensure table styles are applied

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const transactions = location.state?.transactions || [];
  const bankFormat = location.state?.format || "unknown";

  const [activeTab, setActiveTab] = useState("insights"); // Default: Insights first

  return (
    <div className="app-container">
      <div className="dashboard-header">
        <button className="btn-back" onClick={() => navigate("/")}>
          ← Back to Home
        </button>

        <div className="tab-buttons">
          <button
            className={`btn-secondary ${activeTab === "insights" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("insights")}
          >
            Data Insights
          </button>
          <button
            className={`btn-secondary ${activeTab === "transactions" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`btn-secondary ${activeTab === "summary" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </button>
        </div>
      </div>

      {activeTab === "insights" && <InsightsTab transactions={transactions} />}
      {activeTab === "transactions" && (
        <TransactionsTable transactions={transactions} bankFormat={bankFormat} />
      )}
      {activeTab === "summary" && <SummaryTab transactions={transactions} />}
    </div>
  );
}
