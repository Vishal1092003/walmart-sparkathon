

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import logo from "../assets/spark-icon.svg";
import pickupIcon from "../assets/pickupIcon.jpg"
import { FaShoppingCart, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import GreenProducts from "./GreenProducts";
import { useState } from "react";


const WalmartHeader = () => {

    const [{ basket }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  // what we actually hand off to GreenProducts (on button-click)
  const [submittedTerm, setSubmittedTerm] = useState("");
  
  // on search-button click → “submit” the current searchTerm
  const showRecommendation = () => {
    const term = searchTerm.trim();
    if (term) {
      setSubmittedTerm(term.toLowerCase());
    }
  };

    const locationText = "NIT JAMSHEDPUR HOSTEL-J Adityapur";
    const totalPrice=100.56;
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#0071CE",
                padding: "0 25px",
                height: 90,
                color: "white",
                fontFamily: "Arial, sans-serif",
                fontSize: 20,
            }}
        >
            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginRight: 32 }}>
                <img src={logo} alt="Walmart" style={{ height: 50, objectFit: "contain" }} />
            </Link>

            {/* Pickup / Delivery */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 30,
                    padding: "8px 16px",
                    backgroundColor: "#004aad",
                    borderRadius: 24,
                    cursor: "pointer",
                    height:50
                }}
            >
                {/* Icon circle */}
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 5,
                    }}
                >
                    <img
                        src={pickupIcon}
                        alt="Pickup or delivery"
                        style={{ width: 20, height: 20, objectFit: "contain" }}
                    />
                </div>
                {/* Text columns */}
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                    <span style={{ fontSize: 14, fontWeight: "bold" }}>Pickup or delivery?</span>
                    <span style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>{locationText}</span>
                </div>
            </div>

            {/* Search bar */}
              {/* Search bar */}
      <div
        style={{
          width: 600,  // fixed width
          display: "flex",
          alignItems: "center",
          height: 60,
          borderRadius: 24,
          backgroundColor: "#fff",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          style={{
            flex: 1,
            border: "none",
            padding: "0 30px",
            fontSize: 16,
            outline: "none",
            color: "#0057A7",
          }}
        />
        <button
            onClick={showRecommendation}
          style={{
            width: 48,
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaSearch size={20} color="#004aad" />
        </button>
      </div>

            {/* Right links */}
            {/* Right links with icons and cart price */}
            <nav style={{ display: "flex", alignItems: "center", marginLeft: 45 }}>
          <Link to="/orders" style={{ textDecoration: "none", color: "white", marginRight: 24, display: "flex", alignItems: "center" }}>
                    <FaHeart size={18} style={{ marginRight: 8 }} />
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 15, opacity: 0.9 }}>Reorder</div>
                        <div style={{ fontWeight: "bold", fontSize: 16 }}>My Items</div>
                    </div>
                </Link>

                <Link
                    to={localStorage.getItem("jwtToken") ? "/standardDashboard" : "/login"}
                    style={{ textDecoration: "none", color: "white", marginRight: 24, display: "flex", alignItems: "center" }}
                >
                    <FaUser size={18} style={{ marginRight: 6 }} />
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 15, opacity: 0.9 }}>My </div>
                        <div style={{ fontWeight: "bold", fontSize: 16 }}>Account</div>
                    </div>
                </Link>

                {/* Cart with icon above price */}
                <Link
                    to="/checkout"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "white",
                        position: "relative",
                        marginLeft:"20px"
                    }}
                >
                    <div style={{ position: "relative" }}>
                        <FaShoppingCart size={24} />
                        {basket?.length > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: -4,
                                    right: -4,
                                    backgroundColor: "#FFC220",
                                    color: "#004aad",
                                    borderRadius: "50%",
                                    padding: "2px 6px",
                                    fontSize: 10,
                                    // fontWeight: "bold",
                                }}
                            >
                                {basket.length}
                            </span>
                        )}
                    </div>
                    <span style={{ marginTop: 4,fontSize:15 }}>${totalPrice}</span>
                </Link>
            </nav>
        {submittedTerm && (
          <GreenProducts description={submittedTerm} topN={5} />
        )}
        </header>
    );
};

export default WalmartHeader;
