import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";
import SummaryTab from "./SummaryTab";
import InsightsTab from "./InsightsTab";
import "./style/Dashboard.css";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const transactions = location.state?.transactions || [];
  const bankFormat = location.state?.format || "unknown";

  const [activeTab, setActiveTab] = useState("insights"); // Default: Insights first

  return (
    <div className="app-container">
      <div className="dashboard-header">
        <button
          className={`tab-button home-button`}
          onClick={() => navigate("/")}
        >
          ← Home
        </button>

        <button
          className={`tab-button ${activeTab === "insights" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("insights")}
        >
          Data Insights
        </button>
        <button
          className={`tab-button ${activeTab === "transactions" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("transactions")}
        >
          Transactions
        </button>
        <button
          className={`tab-button ${activeTab === "summary" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
      </div>

      {activeTab === "insights" && <InsightsTab transactions={transactions} />}
      {activeTab === "transactions" && (
        <TransactionsTable transactions={transactions} bankFormat={bankFormat} />
      )}
      {activeTab === "summary" && <SummaryTab transactions={transactions} />}
    </div>
  );
}
