import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterShop from "./components/RegisterShop"; // Create this new component
import Login from "./components/Login";
import AboutUs from "./components/AboutUs.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-shop" element={<RegisterShop />} />  {/* Add this route */}
        <Route path="/about" element={<AboutUs />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;