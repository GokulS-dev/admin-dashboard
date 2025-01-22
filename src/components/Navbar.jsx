// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ margin: 0 }}>
        <span style={{ color: "#00aaff" }}>Smart</span>
        <span style={{ color: "#000000" }}>Ezy</span>
        <span style={{ color: "#00aaff" }}>Go</span>
      </h1>
      <nav>
        <a href="/" style={{ margin: "0 15px", textDecoration: "none", color: "#000" }}>Home</a>
        <a href="about" style={{ margin: "0 15px", textDecoration: "none", color: "#000", cursor: "pointer" }}>About Us</a>
        <a href="products" style={{ margin: "0 15px", textDecoration: "none", color: "#000" }}>Products</a>
        <a href="contact" style={{ margin: "0 15px", textDecoration: "none", color: "#000" }}>Contact Us</a>
      </nav>
      <button
        style={{ padding: "5px 15px", border: "1px solid #00aaff", background: "#fff", borderRadius: "5px" }}
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </header>
  );
}

export default Navbar;