// src/Component/SellerSection.js

import React, { useState } from "react";
import EcoWheel from "./EcoWheel";                // Ensure EcoWheel.js has `export default`
import { motion } from "framer-motion";
import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";

export default function SellerSection() {
  // motion variants for buttons
  const btnVariants = {
    rest: {},
    hover: { scale: 1.05, boxShadow: "0 8px 24px rgba(0,113,206,0.3)" },
    tap: { scale: 0.95 }
  };

  // form state
  const [formData, setFormData] = useState({
    productId: "", productName: "", category: "", price: "", grade: "",
    filters: {
      plasticFree: false,
      fscCertified: false,
      carbonNeutral: false,
      recycledMaterials: false,
    },
    productImage: null, manufacturingProcess: "", transportationMethod: "", materialsUsed: "",
    plasticReducedPercent: "", chemicalUsedPercent: "", co2ReducedPercent: "",
    isRecyclable: "", packagingRecyclable: "",
    biodegradablePercent: "", waterUsedLiters: "", energyUsedKwh: "",
    productWeightKg: "", productLifespanYears: "",
  });
  const [hovered, setHovered] = useState("");
  const [modalGrade, setModalGrade] = useState(null);
  const [toast, setToast] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  let toastTimer = null;

  // show toast
  const showToast = (message, type = "success") => {
    clearTimeout(toastTimer);
    setToast({ message, type });
    setToastVisible(true);
    toastTimer = setTimeout(() => setToastVisible(false), 3000);
  };

  // handle inputs
  const handleChange = e => {
    const { name, type, value, checked, files } = e.target;
    if (name.startsWith("filters.")) {
      const key = name.split(".")[1];
      setFormData(f => ({
        ...f,
        filters: { ...f.filters, [key]: checked }
      }));
    } else if (type === "file") {
      setFormData(f => ({ ...f, [name]: files[0] }));
    } else {
      setFormData(f => ({
        ...f,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  // call backend to predict grade
  const calculateGrade = async e => {
    e.preventDefault();
    const payload = {
      plastic_reduced_percent: Number(formData.plasticReducedPercent),
      chemical_used_percent: Number(formData.chemicalUsedPercent),
      co2_emission_reduced_percent: Number(formData.co2ReducedPercent),
      is_recyclable: Number(formData.isRecyclable),
      biodegradable_percent: Number(formData.biodegradablePercent),
      packaging_recyclable: Number(formData.packagingRecyclable),
      water_used_liters: Number(formData.waterUsedLiters),
      energy_used_kwh: Number(formData.energyUsedKwh),
      product_weight_kg: Number(formData.productWeightKg),
      product_lifespan_years: Number(formData.productLifespanYears),
    };
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Prediction failed");
      const { predicted_grade } = await res.json();
      setModalGrade(predicted_grade);
      setFormData(f => ({ ...f, grade: predicted_grade }));
      showToast(`Eco grade: ${predicted_grade}`, "success");
    } catch {
      showToast("Could not calculate grade", "error");
    }
  };

  // submit full product
  const handleSubmit = async e => {
    e.preventDefault();
    // simple validation
    for (const [k, v] of Object.entries(formData)) {
      if (k === "filters") continue;
      if (v === "" || v == null) return showToast(`Please fill in ${k}`, "error");
    }
    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "filters") {
        Object.entries(val).forEach(([f, chk]) => payload.append(`filters.${f}`, chk));
      } else {
        payload.append(key, val);
      }
    });
    if (modalGrade) payload.set("grade", modalGrade);

    try {
      const res = await fetch("http://localhost:8080/addproduct", {
        method: "POST", body: payload
      });
      if (!res.ok) throw new Error("Server error");
      showToast("Product created!", "success");
      // reset
      setFormData({
        productId: "", productName: "", category: "", price: "", grade: "",
        filters: { plasticFree: false, fscCertified: false, carbonNeutral: false, recycledMaterials: false },
        productImage: null, manufacturingProcess: "", transportationMethod: "", materialsUsed: "",
        plasticReducedPercent: "", chemicalUsedPercent: "", co2ReducedPercent: "",
        isRecyclable: "", packagingRecyclable: "",
        biodegradablePercent: "", waterUsedLiters: "", energyUsedKwh: "",
        productWeightKg: "", productLifespanYears: "",
      });
      setModalGrade(null);
    } catch {
      showToast("Failed to create product", "error");
    }
  };

  // styles
  const container = {
    maxWidth: "800px", margin: "0 auto", padding: "32px",
    fontFamily: "Arial, sans-serif", background: "#f3f9fb"
  };
  const heading = {
    textAlign: "center", color: "#0071CE",
    marginBottom: 24, fontSize: "2rem"
  };
  const sectionTitle = {
    fontSize: "1.25rem", color: "#01332b",
    borderLeft: "4px solid #61C13D", paddingLeft: "8px",
    marginBottom: "16px"
  };
  const labelStyle = {
    display: "block", marginBottom: "8px",
    fontWeight: 600, color: "#01332b"
  };
  const inputStyle = {
    width: "100%", padding: "8px", marginBottom: "12px",
    borderRadius: "4px", border: "1px solid #c8e6c9",
    background: "#f5fdfa", fontSize: "0.9rem"
  };
  const buttonStyle = {
    padding: "12px 24px", background: "#0071CE", color: "#fff",
    border: "none", borderRadius: "24px", cursor: "pointer",
    fontSize: "1rem", fontWeight: 600, marginTop: "16px"
  };
  const cardStyle = key => ({
    background: "#fff", borderRadius: "8px", padding: "16px", marginBottom: "24px",
    borderLeft: "4px solid #61C13D",
    boxShadow: hovered === key
      ? "0 8px 24px rgba(0,113,206,0.2)"
      : "0 4px 12px rgba(0,0,0,0.1)",
    transform: hovered === key ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.2s ease"
  });
  const toastStyle = {
    position: "fixed", top: toastVisible ? 16 : -80,
    left: "50%", transform: "translateX(-50%)",
    background: "#fff", padding: "12px 24px", borderRadius: "4px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", display: "flex",
    alignItems: "center", zIndex: 10000, transition: "top 0.3s ease"
  };

  return (
    <div style={container}>
      <h1 style={heading}>List Your Eco-Friendly Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <section
          onMouseEnter={() => setHovered("basic")}
          onMouseLeave={() => setHovered("")}
          style={cardStyle("basic")}
        >
          <h2 style={sectionTitle}>Basic Product Info</h2>
          <label style={labelStyle}>Product ID</label>
          <input
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Product Name</label>
          <input
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Price (USD)</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Product Image</label>
          <input
            type="file"
            name="productImage"
            onChange={handleChange}
            style={{ marginBottom: 12 }}
          />
        </section>

        {/* Manufacturing */}
        <section
          onMouseEnter={() => setHovered("manu")}
          onMouseLeave={() => setHovered("")}
          style={cardStyle("manu")}
        >
          <h2 style={sectionTitle}>Manufacturing Details</h2>
          <label style={labelStyle}>Manufacturing Process</label>
          <input
            name="manufacturingProcess"
            value={formData.manufacturingProcess}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Transportation Method</label>
          <input
            name="transportationMethod"
            value={formData.transportationMethod}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Materials Used</label>
          <input
            name="materialsUsed"
            value={formData.materialsUsed}
            onChange={handleChange}
            style={inputStyle}
          />
        </section>

        {/* Eco Specs + Filters */}
        <section
          onMouseEnter={() => setHovered("eco")}
          onMouseLeave={() => setHovered("")}
          style={cardStyle("eco")}
        >
          <h2 style={sectionTitle}>Eco Specifications</h2>

          <label style={labelStyle}>% Plastic Reduced</label>
          <input
            name="plasticReducedPercent"
            type="number"
            value={formData.plasticReducedPercent}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>% Chemical Used</label>
          <input
            name="chemicalUsedPercent"
            type="number"
            value={formData.chemicalUsedPercent}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>% CO₂ Reduction</label>
          <input
            name="co2ReducedPercent"
            type="number"
            value={formData.co2ReducedPercent}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>% Biodegradable</label>
          <input
            name="biodegradablePercent"
            type="number"
            value={formData.biodegradablePercent}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Water Used (L)</label>
          <input
            name="waterUsedLiters"
            type="number"
            value={formData.waterUsedLiters}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Energy Used (kWh)</label>
          <input
            name="energyUsedKwh"
            type="number"
            value={formData.energyUsedKwh}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Weight (kg)</label>
          <input
            name="productWeightKg"
            type="number"
            value={formData.productWeightKg}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Lifespan (yrs)</label>
          <input
            name="productLifespanYears"
            type="number"
            value={formData.productLifespanYears}
            onChange={handleChange}
            style={inputStyle}
          />
          <label style={labelStyle}>Is Recyclable?</label>
          <select
            name="isRecyclable"
            value={formData.isRecyclable}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select…</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <label style={labelStyle}>Packaging Recyclable?</label>
          <select
            name="packagingRecyclable"
            value={formData.packagingRecyclable}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select…</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>

          {/* Eco Filters */}
          <div style={{ margin: "16px 0" }}>
            <label style={{ ...labelStyle, marginBottom: 8 }}>Eco Filters</label>
            {[
              { key: "plasticFree", label: "Plastic-Free" },
              { key: "fscCertified", label: "FSC-Certified" },
              { key: "carbonNeutral", label: "Carbon-Neutral" },
              { key: "recycledMaterials", label: "Recycled Materials" }
            ].map(f => (
              <label key={f.key} style={{ display: "inline-flex", alignItems: "center", marginRight: 16 }}>
                <input
                  type="checkbox"
                  name={`filters.${f.key}`}
                  checked={formData.filters[f.key]}
                  onChange={handleChange}
                  style={{ marginRight: 6 }}
                />
                {f.label}
              </label>
            ))}
          </div>

          {/* centered Calculate */}
          <div style={{ textAlign: "center" }}>
            <motion.button
              type="button"
              onClick={calculateGrade}
              style={{ ...buttonStyle, background: "#61C13D" }}
              variants={btnVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Calculate Eco Grade
            </motion.button>
          </div>
        </section>

        {/* centered Submit */}
        <div style={{ textAlign: "center" }}>
          <motion.button
            type="submit"
            style={buttonStyle}
            variants={btnVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Submit Product
          </motion.button>
        </div>
      </form>

      {/* EcoWheel Modal */}
      {modalGrade && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.6)", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 1000
        }}>
          <div style={{
            background: "#fff", borderRadius: 8, padding: 24, textAlign: "center",
            width: 320, boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
          }}>
            <button
              onClick={() => setModalGrade(null)}
              style={{ position: "absolute", top: 16, right: 16, border: "none", background: "none", fontSize: 18, cursor: "pointer" }}
            >×</button>
            <h2 style={{ margin: "0 0 16px", color: "#0071CE" }}>Your Eco Rating</h2>
            <div style={{ width: 200, height: 200, margin: "0 auto" }}>
              <EcoWheel grade={modalGrade} />
            </div>
            <button
              onClick={() => setModalGrade(null)}
              style={{
                marginTop: 24, padding: "8px 16px", background: "#0071CE",
                color: "#fff", border: "none", borderRadius: 4, cursor: "pointer"
              }}
            >Close</button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastVisible && toast && (
        <div style={toastStyle}>
          <span style={{
            width: 24, height: 24, borderRadius: "50%",
            background: toast.type === "success" ? "#4caf50" : "#f44336",
            color: "#fff", display: "inline-flex",
            alignItems: "center", justifyContent: "center",
            marginRight: 12
          }}>{toast.type === "success" ? "✔️" : "❌"}</span>
          <span style={{ color: "#333" }}>{toast.message}</span>
          <button
            onClick={() => setToastVisible(false)}
            style={{ background: "transparent", border: "none", marginLeft: "auto", fontSize: 16, cursor: "pointer" }}
          >✕</button>
        </div>
      )}
    </div>
  );
}
