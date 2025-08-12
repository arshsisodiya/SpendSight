import React, { useState, useEffect } from "react";
import PdfUpload from "./PdfUpload";
import TransactionsTable from "./TransactionsTable";
import SummaryTab from "./SummaryTab";
import InsightsTab from "./InsightsTab";
import "./App.css";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [bankFormat, setBankFormat] = useState("unknown");
  const [activeTab, setActiveTab] = useState("transactions");

  const handleUploadComplete = (txns, format) => {
    console.log(
      `Upload complete: Received ${txns.length} transactions, format: ${format}`
    );
    setTransactions(txns || []);
    setBankFormat(format || "unknown");
    setActiveTab("transactions");
  };

  useEffect(() => {
    console.log(
      `Transactions state updated: ${transactions.length} transactions`
    );
  }, [transactions]);

  useEffect(() => {
    console.log(`Bank format updated: ${bankFormat}`);
  }, [bankFormat]);

  return (
    <div className="app-container">
      <h1 className="app-title">Bank Statement Analyzer</h1>
      <PdfUpload onUploadComplete={handleUploadComplete} />

      {transactions.length > 0 && (
        <div className="tab-buttons">
          <button
            className={`btn-secondary ${
              activeTab === "transactions" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`btn-secondary ${
              activeTab === "summary" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </button>
          <button
            className={`btn-secondary ${
              activeTab === "insights" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("insights")}
          >
            Data Insights
          </button>
        </div>
      )}

      {transactions.length === 0 ? (
        <div className="empty-state">
          <p>
            Upload a bank statement PDF to see extracted transactions & totals.
          </p>
        </div>
      ) : activeTab === "transactions" ? (
        <TransactionsTable
          transactions={transactions}
          bankFormat={bankFormat}
        />
      ) : activeTab === "summary" ? (
        <SummaryTab transactions={transactions} />
      ) : (
        <InsightsTab transactions={transactions} />
      )}
    </div>
  );
}
