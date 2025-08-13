import React, { useMemo, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style/TransactionTable.css"; // Assuming you have a CSS file for styling

export default function TransactionsTable({ transactions = [], bankFormat = "unknown" }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "Date", direction: "desc" });
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 100;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, startDate, endDate, sortConfig]);

  const processed = useMemo(() => {
    let items = transactions.slice();

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(t =>
        (t.Details || "").toString().toLowerCase().includes(q) ||
        (t.TransactionID || "").toString().toLowerCase().includes(q) ||
        (t.Account || "").toString().toLowerCase().includes(q) ||
        (t.UTR || "").toString().toLowerCase().includes(q)
      );
    }

    if (typeFilter !== "ALL") {
      items = items.filter(t => (t.Type || "").toUpperCase() === typeFilter);
    }

    if (startDate || endDate) {
      items = items.filter(t => {
        if (!t.Date) return false;
        const d = new Date(t.Date);
        if (startDate && d < startDate) return false;
        if (endDate && d > endDate) return false;
        return true;
      });
    }

    items.sort((a, b) => {
      const key = sortConfig.key;
      const dir = sortConfig.direction === "asc" ? 1 : -1;
      if (key === "Amount") {
        return dir * ((a.Amount || 0) - (b.Amount || 0));
      }
      if (key === "Date") {
        const da = a.Date ? new Date(a.Date).getTime() : 0;
        const db = b.Date ? new Date(b.Date).getTime() : 0;
        return dir * (da - db);
      }
      if (key === "Type") {
        return dir * ((a.Type || "").localeCompare(b.Type || ""));
      }
      return 0;
    });

    return items;
  }, [transactions, search, typeFilter, startDate, endDate, sortConfig]);

  const totals = useMemo(() => {
    let spent = 0, received = 0;
    processed.forEach(t => {
      const type = (t.Type || "").toUpperCase();
      const amt = Number(t.Amount || 0);
      if (type === "DEBIT") spent += amt;
      else if (type === "CREDIT") received += amt;
    });
    return { totalCount: processed.length, spent, received };
  }, [processed]);

  const totalPages = Math.ceil(processed.length / recordsPerPage);
  const paginatedItems = useMemo(() => {
    const startIdx = (currentPage - 1) * recordsPerPage;
    return processed.slice(startIdx, startIdx + recordsPerPage);
  }, [processed, currentPage]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const formatDateCell = (t) => {
    if (!t.Date) return "";
    const d = new Date(t.Date);
    if (isNaN(d)) return String(t.Date);
    return bankFormat === "sbi" ? d.toLocaleDateString() : d.toLocaleString();
  };

  const goToPage = (pageNum) => {
    if (pageNum < 1) pageNum = 1;
    else if (pageNum > totalPages) pageNum = totalPages;
    setCurrentPage(pageNum);
  };

  const renderPageButtons = () => {
    if (totalPages <= 1) return null;
    const maxButtons = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          disabled={i === currentPage}
          className={`page-btn ${i === currentPage ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const exportCSV = () => {
    const headers = ["Date", "Details", "Type", "Amount", "Transaction ID", "UTR", "Account"];
    const rows = processed.map(t => [
      formatDateCell(t),
      `"${(t.Details || "").replace(/"/g, '""')}"`,
      t.Type || "",
      t.Amount || "",
      t.TransactionID || "",
      t.UTR || "",
      t.Account || ""
    ]);
    const csvContent = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="transactions-table-wrapper">
      <div className="header-row">
        <h3>Transactions</h3>
        <div className="totals">
          <div>Total Transactions: <strong>{totals.totalCount}</strong></div>
          <div className="spent">Total Spent: <strong>₹{totals.spent.toFixed(2)}</strong></div>
          <div className="received">Total Received: <strong>₹{totals.received.toFixed(2)}</strong></div>
        </div>
        <button onClick={exportCSV} className="download-btn">
          Download CSV
        </button>
      </div>

      <div className="filters-row">
        <input
          className="filter-input"
          placeholder="Search details, txn id, account, utr..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="ALL">All</option>
          <option value="DEBIT">Debit</option>
          <option value="CREDIT">Credit</option>
        </select>
        <DatePicker
          className="filter-datepicker"
          selected={startDate}
          onChange={setStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start date"
        />
        <DatePicker
          className="filter-datepicker"
          selected={endDate}
          onChange={setEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End date"
        />
        <div className="pagination-info">
          Showing <strong>{paginatedItems.length}</strong> of <strong>{processed.length}</strong> filtered transactions (Page {currentPage} of {totalPages})
        </div>
      </div>

      <div className="table-wrapper">
        <table className="transactions-table">
          <thead>
            <tr>
              <th onClick={() => requestSort("Date")}>Date {sortIndicator(sortConfig, "Date")}</th>
              {bankFormat !== "sbi" && <th>Time</th>}
              <th>Details</th>
              <th onClick={() => requestSort("Type")}>Type {sortIndicator(sortConfig, "Type")}</th>
              <th onClick={() => requestSort("Amount")}>Amount {sortIndicator(sortConfig, "Amount")}</th>
              <th>Transaction ID</th>
              <th>UTR</th>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((t, idx) => (
              <tr key={idx}>
                <td>{formatDateCell(t)}</td>
                {bankFormat !== "sbi" && <td>{t.Date ? new Date(t.Date).toLocaleTimeString() : ""}</td>}
                <td>{t.Details}</td>
                <td>{t.Type}</td>
                <td className="amount-cell">₹{Number(t.Amount || 0).toFixed(2)}</td>
                <td>{t.TransactionID || ""}</td>
                <td>{t.UTR || ""}</td>
                <td>{t.Account || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {renderPageButtons()}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

function sortIndicator(sortConfig, key) {
  if (sortConfig.key !== key) return "";
  return sortConfig.direction === "asc" ? "▲" : "▼";
}
