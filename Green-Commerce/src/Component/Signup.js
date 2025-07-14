import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sparkIcon from "../assets/spark-icon.svg";

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const submit = () => {
        // 1) confirm match
        if (password !== confirm) {
            return toast.error("Passwords do not match", {
                position: "top-right",
                autoClose: 3000
            });
        }

        // 2) send to backend
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
            .then((res) => res.json())
            .then((result) => {
                if (!result.success) {
                    return toast.error(result.message || "Sign up failed", {
                        position: "top-right",
                        autoClose: 3000
                    });
                }
                // 3) show toast, then navigate when it closes
                toast.success("Account created successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    onClose: () => navigate("/login")
                });
            })
            .catch((error) => {
                console.error("SignUp error:", error);
                toast.error("Something went wrong. Please try again.", {
                    position: "top-right",
                    autoClose: 3000
                });
            });
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem"
            }}
        >
            {/* Single top‐level ToastContainer so it stays mounted through navigation */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />

            <div
                style={{
                    width: "100%",
                    maxWidth: 380,
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    padding: "2rem",
                    textAlign: "center"
                }}
            >
                <img
                    src={sparkIcon}
                    alt="Walmart Spark"
                    style={{ width: 48, marginBottom: "1rem" }}
                />

                <h2 style={{ margin: "0 0 1rem", color: "#111", fontSize: "1.5rem" }}>
                    Create your account
                </h2>
                <p style={{ margin: "0 0 2rem", color: "#555", fontSize: "0.95rem" }}>
                    Join Walmart and start shopping sustainably.
                </p>

                <form style={{ textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            fontSize: "1rem",
                            border: "2px solid #444",
                            borderRadius: 4,
                            marginBottom: "1rem",
                            boxSizing: "border-box"
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
                            width: "100%",
                            padding: "0.75rem 1rem",
                            fontSize: "1rem",
                            border: "2px solid #444",
                            borderRadius: 4,
                            marginBottom: "1rem",
                            boxSizing: "border-box"
                        }}
                    />

                    <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            fontSize: "1rem",
                            border: "2px solid #444",
                            borderRadius: 4,
                            marginBottom: "1.5rem",
                            boxSizing: "border-box"
                        }}
                    />

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            submit();
                        }}
                        style={{
                            width: "100%",
                            backgroundColor: "#004aad",
                            color: "#fff",
                            padding: "0.75rem 1rem",
                            fontSize: "1rem",
                            fontWeight: 600,
                            border: "none",
                            borderRadius: 24,
                            cursor: "pointer",
                            marginBottom: "1rem"
                        }}
                    >
                        Register
                    </button>
                </form>

                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                    By signing up you agree to our{" "}
                    <Link to="/terms" style={{ color: "#004aad", textDecoration: "underline" }}>
                        Terms & Conditions
                    </Link>
                    .
                </p>

                <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#004aad", textDecoration: "underline" }}>
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
