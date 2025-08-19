import React from "react";
import { useNavigate } from "react-router-dom";
import PdfUpload from "./PdfUpload";
import "./style/home.css"; // Page-specific styles

export default function Home() {
  const navigate = useNavigate();

  const handleUploadComplete = (transactions, format) => {
    navigate("/app", { state: { transactions, format } });
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bank Statement Analyzer</h1>
        <p className="home-subtitle">
          Turn your PDF or TXT bank statements into clear, usable data.
          <br />
          Simply upload your file to get started.
        </p>
        <PdfUpload onUploadComplete={handleUploadComplete} />
      </div>
    </div>
  );
}