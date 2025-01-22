import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";  // Import the AboutUs component
import Navbar from "./Navbar.jsx";   // Import the Navbar component
import shopping from "../assets/shopping.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";

function Home() {
  const navigate = useNavigate();
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleGetStartedClick = () => {
    navigate("/register-shop");  // Navigate to the register shop page
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <Navbar /> {/* Include Navbar Component */}

      <main style={{ paddingTop: "50px", backgroundColor: "#f4f9ff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>
          Power up <span style={{ color: "#00aaff" }}>the voice</span> of your business
        </h2>
        <button
          style={{ padding: "10px 20px", background: "#00aaff", color: "#fff", border: "none", borderRadius: "5px" }}
          onClick={handleGetStartedClick}
        >
          GET STARTED
        </button>

        <div style={{ width: "100vw", marginTop: "50px", height: "550px"}}>
            <div style={{width: "auto", height: "500px", paddingTop: "75px", justifyContent: "space-between", display: "flex"}}>
                <div style={{width: "50%"}}>
                    <img src={shopping} width="auto" height="300px" alt="shopping"/>
                </div>
                <div style={{width: "50%"}}>
                    <h1>Shopping made <span style={{color: "purple"}}>Easy</span>!</h1>
                    <p style={{padding: "50px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, perferendis voluptas! Obcaecati ullam laborum consectetur mollitia fuga, placeat quam. Modi sed, similique voluptatum nihil quam rerum voluptate explicabo ratione magni quas commodi neque beatae vel nemo aut in! Ipsum fuga perspiciatis nihil nemo, aut facilis optio culpa? Culpa hic rerum eaque quas enim nesciunt. Illo, ipsam reiciendis quos deleniti quam minima dolores perspiciatis saepe reprehenderit explicabo dolorem ab iure fugit. Possimus excepturi laudantium maxime maiores corrupti dignissimos nisi, numquam ratione provident qui eum dolor, ea atque ipsum veniam ad facilis iusto deleniti debitis amet cum nesciunt. Sit ut quae quis.
                    </p>
                </div>
            </div>
        </div>
  
      </main>
            <footer style={{backgroundColor: "#000000", display: "flex", color: "#ffffff", height: "auto", padding: "50px"}}>
            <div style={{width: "33vw"}}>
                <address>
                    <p>Address: 1234 Main Street, Anytown, USA</p>
                    <p>Phone: 1-800-555-1234</p>
                    <p>Email: abc@gmail.com</p>
                </address>
            </div>
            <div style={{width: "33vw"}}>
                <h3>Follow Us</h3>
                <a href="https://www.facebook.com" target="_blank" style={{color: "#ffffff", textDecoration: "none", padding: "10px"}}><img src={facebook} width="30px" height="30px"/></a>
                <a href="https://www.twitter.com" target="_blank"  style={{color: "#ffffff", textDecoration: "none", padding: "10px"}}><img src={x} width="30px" height="30px"/></a>
                <a href="https://www.instagram.com" target="_blank"  style={{color: "#ffffff", textDecoration: "none", padding: "10px"}}><img src={instagram} width="30px" height="30px"/></a>
            </div>
            <div style={{width: "33vw"}}>
                <h3>Legal</h3>
                <a href="/" style={{color: "#ffffff", textDecoration: "none", padding: "10px"}}>Privacy Policy</a>
                <a href="/" style={{color: "#ffffff", textDecoration: "none", padding: "10px"}}>Terms of Use</a>
            </div>
        </footer>
    </div>
  );
}

export default Home;