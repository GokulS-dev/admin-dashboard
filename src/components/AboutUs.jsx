import React from "react";
import Navbar from "./Navbar";  // Import the Navbar component

function AboutUs() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar Component */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin:"0px",
          paddingTop: "20px",
        
        }}
      >

        {/* Our Story */}
        <div
          style={{
            textAlign: "center",
            color: "#ffffff",
            maxWidth: "100vw",
            margin:"0px",
            padding: "20px",
            backgroundColor: "#000000",
          }}
        >
          <h4 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            Our Story
          </h4>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, placeat voluptatum officiis deserunt illum maxime quibusdam autem assumenda eaque repellendus, totam omnis in nobis nostrum ratione inventore nisi quas dolorem.
          </p>
        </div>

        {/* Our Purpose */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "100vw",
            padding: "20px",
            backgroundColor: "#f0f0ff",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            Our Purpose
          </h4>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque nulla blanditiis totam excepturi aperiam similique nobis voluptatum repellat nemo, corporis, aspernatur hic optio a illo molestias tempora, reprehenderit eum dicta et! Mollitia, consectetur quae? Perferendis natus numquam quas, error fugit ab inventore doloribus cupiditate corporis consectetur ipsum fugiat tempore beatae incidunt qui deserunt, dolorem sit laboriosam laudantium cumque eos commodi labore assumenda illo. Vitae odit ad ratione! Laboriosam nisi aliquam aspernatur architecto, temporibus totam deleniti dolores eum ea, in fugit maiores.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;