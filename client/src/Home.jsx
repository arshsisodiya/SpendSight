import React from "react";
import { useNavigate } from "react-router-dom";
import PdfUpload from "./PdfUpload";
import "./App.css"; // Keep global styles
import "./style/home.css"; // Page-specific styles

export default function Home() {
  const navigate = useNavigate();

  const handleUploadComplete = (transactions, format) => {
    navigate("/app", { state: { transactions, format } });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Bank Statement Analyzer</h1>
      <PdfUpload onUploadComplete={handleUploadComplete} />
    </div>
  );
}
