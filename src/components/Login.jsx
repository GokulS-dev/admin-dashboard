import React, { useState } from "react";
import img from "../assets/login.png";

function Login() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters.");
      return;
    }
    // Continue with login logic
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (!fullName) {
      alert("Full name is required.");
      return;
    }
    // Continue with registration logic
  };

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0f4f8" }}
    >
      {/* Navbar */}
      <header
        style={{
          padding: "15px",
          backgroundColor: "#ffffff",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <span style={{ color: "#00aaff" }}>Smart</span>
          <span style={{ color: "#000000" }}>Ezy</span>
          <span style={{ color: "#00aaff" }}>Go</span>
        </h1>
      </header>

      {/* Main Section */}
      <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
        {/* Left Section with Image */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src={img}
            alt="Login Image"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              borderRadius: "10px",
              border: "2px solid rgb(255, 255, 255)",
            }}
          />
        </div>

        {/* Right Section with Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "30px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            {isNewUser ? (
              // New User Registration Form
              <>
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#007BFF",
                  }}
                >
                  Register Your credentials
                </h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Full Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Email:</label>
                    <input
                      type="email"
                      placeholder="Enter owner's email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Password:</label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "#007BFF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </button>
                </form>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    cursor: "pointer",
                    color: "#007BFF",
                  }}
                  onClick={() => setIsNewUser(false)}
                >
                  Back to Login
                </p>
              </>
            ) : (
              // Login Form
              <>
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#007BFF",
                  }}
                >
                  Login
                </h2>
                <form onSubmit={handleLoginSubmit}>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Username:</label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Password:</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "#007BFF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </form>
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                  New User?{" "}
                  <span
                    style={{ cursor: "pointer", color: "#007BFF" }}
                    onClick={() => setIsNewUser(true)}
                  >
                    Register Here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;