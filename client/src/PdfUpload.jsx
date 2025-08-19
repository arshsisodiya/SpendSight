import React, { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CloudUpload, RefreshCcw } from "lucide-react";
import "./style/PdfUpload.css";

export default function PdfUpload({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  // Use environment variable, fallback to localhost for local dev
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleUpload = async () => {
    if (!file) {
      setErrorMsg("Please select a PDF or TXT file before uploading.");
      return;
    }
    setErrorMsg(""); // clear previous error

    const formData = new FormData();
    formData.append("pdf", file);

    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const raw = res.data.transactions || [];
      const format = res.data.format || "unknown";

      const normalized = raw.map((t) => {
        let dateObj = null;
        if (t.Date) {
          try {
            dateObj = new Date(t.Date);
            if (isNaN(dateObj)) dateObj = null;
          } catch {
            dateObj = null;
          }
        }
        const amount =
          typeof t.Amount === "number"
            ? t.Amount
            : parseFloat(String(t.Amount || "0").replace(/[^0-9.-]+/g, "")) ||
              0;

        return { ...t, Date: dateObj, Amount: amount };
      });

      onUploadComplete(normalized, format);
    } catch (err) {
      setErrorMsg("Failed to upload/process file. Check console for details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setErrorMsg("");
    }
  };

  const handleFileChange = (file) => {
    setFile(file);
    setErrorMsg("");
  };

  const handleReset = () => {
    setFile(null);
    setErrorMsg("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <motion.div
      className="pdf-upload-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`upload-box ${dragOver ? "drag-over" : ""}`}
        onClick={() => fileInputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <CloudUpload size={48} className="upload-icon" />
        <p className="upload-text-primary">
          {file ? file.name : "Click or drag & drop your file"}
        </p>
        <p className="upload-text-secondary">Supported formats: PDF, TXT</p>
        <input
          ref={fileInputRef}
          id="pdf-file"
          type="file"
          accept="application/pdf,.txt"
          onChange={(e) => handleFileChange(e.target.files[0])}
          className="file-input-hidden"
        />
      </div>

      {errorMsg && <p className="error-message">{errorMsg}</p>}

      <div className="buttons-group">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className={`btn-secondary ${file ? "btn-danger" : ""}`}
        >
          <RefreshCcw size={16} />
          Clear
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={!file || loading}
          className="btn-primary"
        >
          {loading ? "Processing..." : "Upload"}
        </motion.button>
      </div>
    </motion.div>
  );
}
