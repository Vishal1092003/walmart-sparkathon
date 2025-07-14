import React from "react";
import sparkIcon from "../assets/spark-icon.svg"; // Walmart Spark logo

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const feedbackBar = {
    backgroundColor: "#E5F7FF",
    padding: "24px 16px",
    textAlign: "center",
  };

  const feedbackText = {
    margin: 0,
    fontSize: 16,
    color: "#000",
  };

  const feedbackBtn = {
    marginTop: 12,
    padding: "8px 20px",
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: 24,
    cursor: "pointer",
  };

  const navBar = {
    backgroundColor: "#0057A7",
    color: "#fff",
    padding: "16px 24px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    fontSize: 12,
    lineHeight: 1.4,
  };

  const navLink = {
    color: "#fff",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  const legalBar = {
    backgroundColor: "#0057A7",
    color: "#fff",
    padding: "12px 24px",
    textAlign: "center",
    fontSize: 11,
  };

  const backToTopStyle = {
    backgroundColor: "#f0f0f0",
    color: "#000",
    textAlign: "center",
    padding: "8px 0",
    cursor: "pointer",
    fontSize: 14,
  };

  return (
    <footer>
      {/* Back to top */}
      <div style={backToTopStyle} onClick={scrollToTop}>
        Back to top
      </div>

      {/* Feedback callout */}
      <div style={feedbackBar}>
        <p style={feedbackText}>We’d love to hear what you think!</p>
        <button style={feedbackBtn}>Give feedback</button>
      </div>

      {/* Link section */}
      <div style={navBar}>
        <a href="/all-departments" style={navLink}>All Departments</a>
        <a href="/store-directory" style={navLink}>Store Directory</a>
        <a href="/careers" style={navLink}>Careers</a>
        <a href="/our-company" style={navLink}>Our Company</a>
        <a href="/sell-on-walmart" style={navLink}>Sell on Walmart.com</a>
        <a href="/help" style={navLink}>Help</a>
        <a href="/product-recalls" style={navLink}>Product Recalls</a>
        <a href="/accessibility" style={navLink}>Accessibility</a>
        <a href="/tax-exempt-program" style={navLink}>Tax Exempt Program</a>
        <a href="/app" style={navLink}>Get the Walmart App</a>
        <a href="/safety-data-sheet" style={navLink}>Safety Data Sheet</a>
        <a href="/terms" style={navLink}>Terms of Use</a>
        <a href="/privacy" style={navLink}>Privacy Notice</a>
        <a href="/ca-supply-act" style={navLink}>California Supply Chain Act</a>
        <a href="/your-privacy-choices" style={navLink}>Your Privacy Choices</a>
        <a href="/notice-at-collection" style={navLink}>Notice at Collection</a>
        <a href="/adchoices" style={navLink}>AdChoices</a>
        <a href="/consumer-health-notices" style={navLink}>Consumer Health Data Privacy Notices</a>
        <a href="/pharmacy" style={navLink}>Pharmacy</a>
        <a href="/walmart-business" style={navLink}>Walmart Business</a>
        <a href="/i-y-i-w-y-k" style={navLink}>#IYIWYK</a>
        <a href="/delete-account" style={navLink}>Delete Account</a>
      </div>

      {/* Legal/footer line */}
      <div style={legalBar}>
        <img
          src={sparkIcon}
          alt="Walmart Spark"
          style={{ width: 20, verticalAlign: "middle", marginRight: 8 }}
        />
        © 2025 Walmart. The trademarks Walmart and the Walmart Spark design are registered with the US Patent and Trademark Office. All Rights Reserved.
      </div>
    </footer>
  );
}
