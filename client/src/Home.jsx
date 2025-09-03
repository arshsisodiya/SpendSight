import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PdfUpload from "./PdfUpload";
import { sampleTransactions } from "./sampleData"; // Import sample data
import "./style/home.css";
import ssImage from './preview.png';

// A simple component for the dark mode toggle switch
const DarkModeToggle = ({ isDarkMode, toggleTheme }) => (
  <div className="theme-switch-wrapper">
    <label className="theme-switch" htmlFor="dark-mode-toggle">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <div className="slider round"></div>
    </label>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const [isStepsOpen, setIsStepsOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check for saved theme in localStorage and apply it on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const handleUploadComplete = (transactions, format) => {
    navigate("/app", { state: { transactions, format } });
  };

  // Handler for the new demo button
  const handleDemoClick = () => {
    handleUploadComplete(sampleTransactions, "demo");
  };

  const toggleSteps = () => setIsStepsOpen((prev) => !prev);
  const toggleFaq = () => setIsFaqOpen((prev) => !prev);

  // Function to toggle theme and save preference
  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark-mode");
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="home-container">
      <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="home-title">Bank Statement Analyzer</h1>
        <p className="home-subtitle">
          Upload your PhonePe statement PDF and instantly get
          <br />
          detailed spending trends, insights, and visual reports.
        </p>
        <div className="home-content">
          <PdfUpload onUploadComplete={handleUploadComplete} />
          {/* NEW: Demo Button Section */}
          <div className="demo-section">
            <p>Or</p>
            <button onClick={handleDemoClick} className="btn-demo">
              ✨ View a Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section (Dropdown) */}
      <section className="steps-section">
        <button className="section-title-button" onClick={toggleSteps}>
          <h2>How to Get Your PhonePe Statement</h2>
          <span className={`arrow ${isStepsOpen ? "open" : ""}`}></span>
        </button>
        <div className={`steps-content ${isStepsOpen ? "open" : ""}`}>
          <div className="steps-grid">
            <div className="step-card">
              1️⃣ Open PhonePe → Go to <b>History</b>
            </div>
            <div className="step-card">
              2️⃣ Tap <b>My Statements</b> from the top-right menu
            </div>
            <div className="step-card">
              3️⃣ Choose a <b>Time Range</b> or a full <b>Financial Year</b>
            </div>
            <div className="step-card">
              4️⃣ Tap <b>Download Statement</b> (PDF)
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Expanded) */}
      <section className="features-section">
        <h2 className="section-title">Why Use This App?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h4>⚡ Instant PDF Parsing</h4>
            <p>Our fast and accurate engine processes your entire statement in seconds.</p>
          </div>
          <div className="feature-card">
            <h4>📊 Visual Charts</h4>
            <p>Go beyond numbers. See spending habits with interactive pie and bar charts.</p>
          </div>
          <div className="feature-card">
            <h4>📅 Detailed Trends</h4>
            <p>Analyze your spending patterns by day, week, or month to find insights.</p>
          </div>
          <div className="feature-card">
            <h4>📂 Export Your Data</h4>
            <p>Download your transactions as a CSV file for spreadsheets or other apps.</p>
          </div>
        </div>
      </section>

      {/* Supported Documents Section */}
      <section className="supported-section">
        <h2 className="section-title">Supported Documents</h2>
        <div className="supported-content">
          <div className="supported-card">
            <span className="supported-logo">🅿️</span>
            <h4>PhonePe Statements</h4>
            <p>Currently optimized for official PDF statements from the PhonePe app.</p>
          </div>
          <div className="supported-roadmap">
            <h4>Coming Soon...</h4>
            <p>Support for Google Pay, Paytm, and major bank statements is on the way!</p>
          </div>
        </div>
      </section>

      {/* Privacy First Section */}
      <section className="privacy-section">
        <h2 className="section-title">Your Privacy is Our Priority</h2>
        <div className="privacy-grid">
          <div className="privacy-card">
            <h3>🔒 Client-Side Processing</h3>
            <p>All processing happens in your browser. Your files never touch our servers.</p>
          </div>
          <div className="privacy-card">
            <h3>🗑️ No Data Storage</h3>
            <p>We don't save, store, or see any of your personal or financial information.</p>
          </div>
          <div className="privacy-card">

            <h3 style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.334-1.759-1.334-1.759-1.09-.745.083-.73.083-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.22-.124-.3-.535-1.523.117-3.176 0 0 1-.32 3.296 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.295-1.55 3.296-1.23 3.296-1.23.652 1.653.24 2.876.118 3.176.77.837 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.817 1.1.817 2.217 0 1.605-.015 2.898-.015 3.284 0 .318.216.69.825.577C20.562 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              Open Source Codebase
            </h3>
            <p>The code is public on GitHub. You can verify our privacy claims yourself.</p>

          </div>
        </div>
      </section>

      {/* FAQ Section Dropdown */}
      <section className="faq-section">
        <button className="section-title-button" onClick={toggleFaq}>
          <h2>Frequently Asked Questions</h2>
          <span className={`arrow ${isFaqOpen ? "open" : ""}`}></span>
        </button>
        <div className={`faq-content ${isFaqOpen ? "open" : ""}`}>
          <div>
            <div className="faq-item">
              <h4>Is it safe to upload my bank statement?</h4>
              <p>Yes. The app operates entirely within your web browser. Your data is not sent to any server, ensuring complete privacy.</p>
            </div>
            <div className="faq-item">
              <h4>What statement formats are supported?</h4>
              <p>Currently, the app is optimized for PhonePe statement PDFs and basic TXT files. Support for more bank formats is coming soon!</p>
            </div>
            <div className="faq-item">
              <h4>Do you see my financial data?</h4>
              <p>No. We cannot see, store, or access your data. All analysis is done locally on your computer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section (Upgraded) */}
      <section className="preview-section">
        <h2 className="section-title">See What You Get</h2>
        <div className="preview-image-container">
          <img
           src={ssImage}
            alt="A screenshot of the application's analysis dashboard, showing charts and graphs."
            className="preview-image"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025 Bank Statement Analyzer ·
          <a
            href="https://github.com/arshsisodiya/SpendSight"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          · <a href="#"> Privacy</a>
        </p>
      </footer>
    </div>
  );
}
