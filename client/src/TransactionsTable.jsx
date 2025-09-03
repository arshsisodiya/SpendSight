import React, { useMemo, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Ensure you are importing the updated CSS file
import "./style/TransactionTable.css";

// Helper component for sort indicators for cleaner code
function SortIndicator({ sortConfig, columnKey }) {
  if (sortConfig.key !== columnKey) return null;
  return sortConfig.direction === "asc" ? " ▲" : " ▼";
}

// Robust function to parse amounts that might contain currency symbols/text
const parseAmount = (amount) => {
  if (typeof amount === 'number') return amount;
  if (typeof amount === 'string') {
    // Removes all non-numeric characters except for the decimal point and minus sign
    const cleaned = amount.replace(/[^0-9.-]+/g, "");
    return parseFloat(cleaned) || 0;
  }
  return 0;
};

export default function TransactionsTable({ transactions = [] }) {
  // State hooks remain the same
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "Date", direction: "desc" });
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 50;

  // useEffect and helper functions remain the same
  useEffect(() => setCurrentPage(1), [search, typeFilter, startDate, endDate, sortConfig]);
  const sanitizeDetails = (details) => { if (!details) return ""; return details.replace(/^Paid to\s*/i, "").replace(/^Received from\s*/i, "").trim(); };
  const formatDate = (dateStr) => { if (!dateStr) return "N/A"; try { return new Date(dateStr).toLocaleDateString("en-GB"); } catch (e) { return "Invalid Date"; } };
  const requestSort = (key) => { let direction = "asc"; if (sortConfig.key === key && sortConfig.direction === "asc") { direction = "desc"; } setSortConfig({ key, direction }); };
  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const processedTransactions = useMemo(() => {
    // FIXED: Added a sanitization step to correct transaction types based on amount string
    let items = transactions.map(t => {
      const newT = { ...t }; // Create a copy to avoid mutating props
      const amountStr = (newT.Amount || "").toString().toLowerCase();
      // If 'debit' is in the amount string, ensure the type is DEBIT.
      if (amountStr.includes('debit')) {
        newT.Type = 'DEBIT';
      }
      // If 'credit' is in the amount string, ensure the type is CREDIT.
      else if (amountStr.includes('credit')) {
        newT.Type = 'CREDIT';
      }
      return newT;
    });

    // Restored more comprehensive search logic from original file
    if (search.trim()) { 
      const q = search.toLowerCase(); 
      items = items.filter(t => 
        (sanitizeDetails(t.Details) || "").toLowerCase().includes(q) || 
        (t.TransactionID || "").toLowerCase().includes(q) ||
        (t.Account || "").toLowerCase().includes(q) ||
        (t.UTR || "").toLowerCase().includes(q)
      ); 
    }
    if (typeFilter !== "ALL") { items = items.filter(t => (t.Type || "").toUpperCase() === typeFilter); }
    if (startDate || endDate) { items = items.filter(t => { if (!t.Date) return false; const d = new Date(t.Date); if (startDate && d < startDate) return false; if (endDate) { const endOfDay = new Date(endDate); endOfDay.setHours(23, 59, 59, 999); if (d > endOfDay) return false; } return true; }); }
    
    // Uses the robust parseAmount function for sorting
    items.sort((a, b) => { 
      const { key, direction } = sortConfig; 
      const dir = direction === "asc" ? 1 : -1; 
      if (key === "Amount") return dir * (parseAmount(a.Amount) - parseAmount(b.Amount)); 
      if (key === "Date") { const da = a.Date ? new Date(a.Date).getTime() : 0; const db = b.Date ? new Date(b.Date).getTime() : 0; return dir * (db - da); } 
      return dir * ((a[key] || "").localeCompare(b[key] || "")); 
    });
    return items;
  }, [transactions, search, typeFilter, startDate, endDate, sortConfig]);

  const { paginatedItems, totalPages, totals } = useMemo(() => {
    let spent = 0, received = 0;
    // Uses the robust parseAmount function for calculating totals
    processedTransactions.forEach(t => { 
      const type = (t.Type || "").toUpperCase(); 
      const amt = parseAmount(t.Amount); 
      if (type === "DEBIT") spent += amt; 
      else if (type === "CREDIT") received += amt; 
    });
    const totalPages = Math.ceil(processedTransactions.length / recordsPerPage);
    const startIdx = (currentPage - 1) * recordsPerPage;
    const paginatedItems = processedTransactions.slice(startIdx, startIdx + recordsPerPage);
    return { paginatedItems, totalPages, totals: { spent, received } };
  }, [processedTransactions, currentPage]);

  const exportToCSV = () => {
    const headers = ["Date", "Details", "Type", "Amount", "Transaction ID", "Account"];
    const rows = processedTransactions.map(t => [formatDate(t.Date), `"${sanitizeDetails(t.Details)}"`, t.Type, parseAmount(t.Amount), t.TransactionID, t.Account]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderPageButtons = () => {
    if (totalPages <= 1) return null;
    const maxButtons = 5; // Max buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => setCurrentPage(i)} className={`page-btn ${i === currentPage ? "active" : ""}`}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h3>All Transactions</h3>
        <div className="totals-summary">
          <span>Transactions: <strong>{processedTransactions.length}</strong></span>
          <span className="total-spent">Spent: <strong>₹{totals.spent.toFixed(2)}</strong></span>
          <span className="total-received">Received: <strong>₹{totals.received.toFixed(2)}</strong></span>
        </div>
      </div>

      <div className="controls-wrapper">
        <div className="filters-container">
          <input className="filter-control" placeholder="Search details, ID, Account..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="filter-control" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="ALL">All Types</option>
            <option value="DEBIT">Debit</option>
            <option value="CREDIT">Credit</option>
          </select>
          <div className="date-filter-group">
            <div className="datepicker-icon-wrapper">
              <DatePicker className="filter-control" selected={startDate} onChange={setStartDate} selectsStart startDate={startDate} endDate={endDate} placeholderText="Start Date" />
              <span className="calendar-icon">📅</span>
            </div>
            <div className="datepicker-icon-wrapper">
              <DatePicker className="filter-control" selected={endDate} onChange={setEndDate} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} placeholderText="End Date" />
              <span className="calendar-icon">📅</span>
            </div>
            {(startDate || endDate) && (
              <button className="reset-btn" onClick={handleResetDates}>Reset</button>
            )}
          </div>
        </div>
        <button className="export-btn" onClick={exportToCSV}>Export CSV</button>
      </div>

      <div className="table-responsive-wrapper">
        <table className="transactions-table">
          <thead>
            <tr>
              <th onClick={() => requestSort("Date")}>Date <SortIndicator sortConfig={sortConfig} columnKey="Date" /></th>
              <th>Details</th>
              <th className="tablet-visible" onClick={() => requestSort("Type")}>Type <SortIndicator sortConfig={sortConfig} columnKey="Type" /></th>
              <th className="amount-cell" onClick={() => requestSort("Amount")}>Amount <SortIndicator sortConfig={sortConfig} columnKey="Amount" /></th>
              <th className="mobile-hidden desktop-visible">Transaction ID</th>
              <th className="mobile-hidden desktop-visible">Account</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((t, idx) => (
              <tr key={t.TransactionID || idx}>
                <td>{formatDate(t.Date)}</td>
                <td>{sanitizeDetails(t.Details)}</td>
                <td className="tablet-visible">{t.Type}</td>
                {/* Uses the robust parseAmount function for display */}
                <td className="amount-cell">₹{parseAmount(t.Amount).toFixed(2)}</td>
                <td className="mobile-hidden desktop-visible">{t.TransactionID}</td>
                <td className="mobile-hidden desktop-visible">{t.Account}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-footer">
        <div className="pagination-info">
          Page {currentPage} of {totalPages} ({processedTransactions.length} items)
        </div>
        <div className="pagination-controls">
          <button className="page-btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
          {renderPageButtons()}
          <button className="page-btn" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
}
        