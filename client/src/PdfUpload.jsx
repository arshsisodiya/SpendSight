import React, { useState } from "react";
import axios from "axios";

export default function PdfUpload({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
        const amount = typeof t.Amount === "number"
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

  return (
    <div className="pdf-upload-container">
      <input
        id="pdf-file"
        type="file"
        accept="application/pdf,.txt"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />
      <div className="buttons-group">
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="btn-primary"
        >
          {loading ? "Processing..." : "Upload & Parse PDF"}
        </button>
        <button
          onClick={() => {
            setFile(null);
            onUploadComplete([], "unknown");
          }}
          className="btn-secondary"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
