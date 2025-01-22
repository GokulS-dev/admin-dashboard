import React, { useState } from "react";
import img from "../assets/shopregister.png";
function RegisterShop() {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic, e.g., API call
    console.log("Shop Registered", { shopName, ownerName, email });
  };

  return (
    <div>
      {/* Navbar */}
      <header
        style={{
          padding: "15px",
          backgroundColor: "#ffffff",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "left",
          width: "100%",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <span style={{ color: "#00aaff" }}>Smart</span>
          <span style={{ color: "#000000" }}>Ezy</span>
          <span style={{ color: "#00aaff" }}>Go</span>
        </h1>
      </header>

      {/* Register Shop Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Section with Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src={img}
            alt="Shop Image"
            style={{
              maxWidth: "100%",
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
              marginTop: "100px",
            }}
          >
            <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
              Register Your Shop
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label>Shop Name</label>
                <input
                  type="text"
                  placeholder="Enter shop name"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Owner's Name</label>
                <input
                  type="text"
                  placeholder="Enter owner's name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Email</label>
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
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#00aaff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Register Shop
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterShop;