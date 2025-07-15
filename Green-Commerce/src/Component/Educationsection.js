import React, { useState } from "react";
import { motion } from "framer-motion";
import packagingVideo from "../assets/videos/sus_pack.mp4";
import recycleVideo from "../assets/videos/package.mp4";
import net0carbon from "../assets/walmartsustainablelogo.jpeg";
import { FaCheckCircle, FaMapMarkerAlt, FaPlusCircle } from "react-icons/fa";

const faqItems = [
  {
    question: "Why did we launch the Walmart Eco-Hub?",
    answer:
      "We built the Walmart Eco-Hub to help customers easily find and purchase sustainably sourced, low-impact products — aligning with our Project Gigaton goal to remove a gigaton of emissions from our supply chain by 2030.",
  },
  {
    question: "How do Group Orders work?",
    answer: (
      <>
        <section style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
          <FaPlusCircle size={24} style={{ marginRight: 12, color: "#61C13D" }} />
          <div>
            <strong>1. Start a Group Order</strong>
            <p>Click “Start Group Order” on Eco-Hub, choose to create or join a nearby order.</p>
          </div>
        </section>
        <section style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
          <FaCheckCircle size={24} style={{ marginRight: 12, color: "#0071CE" }} />
          <div>
            <strong>2. Create a Group</strong>
            <p>Enter name, location, deadline & review items. This integrates seamlessly behind the scenes.</p>
          </div>
        </section>
        <section style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
          <FaMapMarkerAlt size={24} style={{ marginRight: 12, color: "#FFC220" }} />
          <div>
            <strong>3. Join a Group</strong>
            <p>Browse nearby via our API and join with a single click, then place your order securely.</p>
          </div>
        </section>
      </>
    ),
  },
  {
    question: "What is Eco Grade?",
    answer: (
      <>
        <p>
          <strong>Eco Grade</strong> is a letter rating (A*, A, B+, B, C) that summarizes a product’s environmental performance on Walmart.com.
        </p>
        <ul style={{ marginLeft: 20, lineHeight: 1.6 }}>
          <li>A*: ≥ 90 — outstanding</li>
          <li>A: 80–89 — very good</li>
          <li>B+: 70–79 — good</li>
          <li>B: 60–69 — fair</li>
          <li>C: &lt;60 — needs improvement</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I request sustainability feedback?",
    answer: (
      <p>
        Use the{" "}
        <a href="/feedback" style={{ color: "#0071CE", textDecoration: "underline" }}>
          Feedback Form
        </a>{" "}
        to report any concerns or suggestions about our eco-claims.
      </p>
    ),
  },
];

export default function WalmartEducationSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  // smooth scroll helper
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // shared style objects
  const container = { fontFamily: "Arial, sans-serif", background: "#f3f9fb", padding: 32, color: "#01332b" };
  const cardText = { background: "#fff", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", lineHeight: 1.6 };
  const sectionTitle = { fontSize: 24, borderBottom: "2px solid #e0f2f1", marginBottom: 16, paddingBottom: 8, color: "#01332b" };
  const navList = { display: "flex", gap: 16, listStyle: "none", padding: 0, marginBottom: 24 ,marginLeft:50,fontSize:20};
  const navLink = { color: "#0071CE", textDecoration: "none", fontWeight: 600, cursor: "pointer" };

  return (
    <div style={container}>

      {/* NAVBAR */}
      <motion.nav initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <ul style={navList}>
          {["Home", "Overview", "FAQs"].map((label, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
            >
              <a
                href={i === 0 ? "/" : i === 1 ? "#overview" : "#FAQ"}
                style={navLink}
                onClick={e => scrollTo(e, i === 1 ? "overview" : "FAQ")}
                onMouseEnter={e => (e.currentTarget.style.color = "#61C13D")}
                onMouseLeave={e => (e.currentTarget.style.color = "#0071CE")}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* ROW 1: Video ↔ Text */}
      <motion.section
        id="overview"
        style={{ display: "flex", gap: 32, alignItems: "center", margin: "2rem 0" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Video Left */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <video
            src={packagingVideo}
            autoPlay
            loop
            muted
            controls
            style={{ width: "100%", maxWidth: 600, height: 340, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Text Right */}
        <div style={{ flex: 1 }}>
          <div style={cardText}>
            <h2 style={{ marginTop: 0 }}>See Why Sustainable Packaging Is Important to Walmart</h2>
            <p>
              Our sustainable packaging initiatives reduce waste and improve recyclability, aligning with Walmart’s
              goal to achieve zero waste in our operations by 2025.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ROW 2: Text ↔ Video */}
      <motion.section
        style={{ display: "flex", gap: 32, alignItems: "center", margin: "2rem 0", flexDirection: "row-reverse" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Video Right */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <video
            src={recycleVideo}
            autoPlay
            loop
            muted
            controls
            style={{ width: "100%", maxWidth: 600, height: 340, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Text Left */}
        <div style={{ flex: 1 }}>
          <div style={cardText}>
            <h2 style={{ marginTop: 0 }}>Recycling in Action</h2>
            <p>
              Watch how Walmart repurposes returned and waste materials into fresh packaging, closing the loop and
              cutting down on landfill-bound waste.
            </p>
            <ul style={{ marginLeft: 16 }}>
              <li>Collection at distribution centers</li>
              <li>Sorting & cleaning materials</li>
              <li>Reprocessing into new corrugated packaging</li>
              <li>Reuse across our Eco-Hub network</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ROW 3: Image ↔ Text */}
      <motion.section
        style={{ display: "flex", gap: 32, alignItems: "center", margin: "2rem 0" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Left */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={net0carbon}
            alt="Sustainability Illustration"
            style={{ width: "100%", maxWidth: 600, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Text Right */}
        <div style={{ flex: 1 }}>
          <div style={cardText}>
            <h2 style={{ marginTop: 0 }}>Walmart Sustainability Hub</h2>
            <p>
              Explore our ongoing commitment to reduce environmental impact and improve community well-being.
              From carbon-free energy goals to sustainable products, our Eco-Hub highlights progress and
              empowers you to shop responsibly.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section id="FAQ">
        <h2 style={sectionTitle}>Frequently Asked Questions</h2>
        {faqItems.map((item, idx) => {
          const open = activeIndex === idx;
          return (
            <div
              key={idx}
              style={{
                margin: "16px 0",
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                borderLeft: "4px solid #61C13D",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <button
                onClick={() => setActiveIndex(open ? null : idx)}
                style={{
                  padding: 16,
                  width: "100%",
                  background: open ? "#e8f5e9" : "#f9fcfb",
                  border: "none",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <span>{item.question}</span>
                <span style={{ transform: open ? "rotate(45deg)" : "rotate(0)", transition: "0.2s" }}>+</span>
              </button>
              <div
                style={{
                  maxHeight: open ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  padding: open ? "16px" : "0 16px",
                  fontSize: 14,
                }}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
