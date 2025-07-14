import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sparkIcon from "../assets/spark-icon.svg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:8080/login", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, password })
      });
      const result = await resp.json();

      if (!result.success) {
        return toast.error(result.message || "Login failed", {
          position: "top-right",
          
        });
      }

      // store token & user
      localStorage.setItem("jwtToken", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("email", result.user.email);

      // show toast, then navigate when it's dismissed
      toast.success("Logged in successfully!", {
        position: "top-right"
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
       
      });
    }
  };

  return (
    <div
      style={{
        minHeight:       "100vh",
        backgroundColor: "#fafafa",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "2rem"
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <div
        style={{
          width:          "100%",
          maxWidth:       380,
          backgroundColor:"#fff",
          borderRadius:   8,
          boxShadow:      "0 2px 8px rgba(0,0,0,0.1)",
          padding:        "2rem",
          textAlign:      "center"
        }}
      >
        <img
          src={sparkIcon}
          alt="Walmart Spark"
          style={{ width: 48, marginBottom: "1rem" }}
        />

        <h2 style={{ margin: "0 0 1rem", color: "#111", fontSize: "1.5rem" }}>
          Sign in to your account
        </h2>
        <p style={{ margin: "0 0 2rem", color: "#555", fontSize: "0.95rem" }}>
          Enter your email and password below.
        </p>

        <form onSubmit={submit} style={{ textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width:         "100%",
              padding:       "0.75rem 1rem",
              fontSize:      "1rem",
              border:        "2px solid #444",
              borderRadius:  4,
              marginBottom: "1rem",
              boxSizing:     "border-box"
            }}
          />

          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width:         "100%",
              padding:       "0.75rem 1rem",
              fontSize:      "1rem",
              border:        "2px solid #444",
              borderRadius:  4,
              marginBottom: "1.5rem",
              boxSizing:     "border-box"
            }}
          />

          <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "1.5rem" }}>
            Securing your personal information is our priority.<br />
            <Link to="/privacy" style={{ color: "#004aad", textDecoration: "underline" }}>
              See our privacy measures.
            </Link>
          </p>

          <button
            type="submit"
            style={{
              width:          "100%",
              backgroundColor:"#004aad",
              color:          "#fff",
              padding:        "0.75rem 1rem",
              fontSize:       "1rem",
              fontWeight:     600,
              border:         "none",
              borderRadius:   24,
              cursor:         "pointer"
            }}
          >
            Continue
          </button>
        </form>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          New to Walmart?
          {" "}
          <Link to="/signup" style={{ color: "#004aad", textDecoration: "underline" }}>
            Create your account
          </Link>
        </p>
      </div>
    </div>
  );
}
