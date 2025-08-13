import React, { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CloudUpload, RefreshCcw } from "lucide-react";
import "./style/PdfUpload.css";

export default function PdfUpload({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null); // Ref to trigger file picker

  const handleUpload = async () => {
    if (!file) {
      alert("Choose a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
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
            : parseFloat(String(t.Amount || "0").replace(/[^0-9.-]+/g, "")) || 0;

        return { ...t, Date: dateObj, Amount: amount };
      });

      onUploadComplete(normalized, format);
    } catch (err) {
      alert("Failed to upload/process PDF. See console for details.");
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
    }
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
        onClick={() => fileInputRef.current.click()} // Trigger click
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <CloudUpload size={50} className="upload-icon" />
        <p className="upload-text">
          {file ? file.name : "Click or drag & drop your bank statement here"}
        </p>
        <input
          ref={fileInputRef}
          id="pdf-file"
          type="file"
          accept="application/pdf,.txt"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input-hidden"
        />
      </div>

      <div className="buttons-group">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={!file || loading}
          className="btn-primary"
        >
          {loading ? "Processing..." : "Upload & Parse PDF"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setFile(null);
            onUploadComplete([], "unknown");
          }}
          className="btn-secondary"
        >
          <RefreshCcw size={16} />
          Reset
        </motion.button>
      </div>
    </motion.div>
  );
}
