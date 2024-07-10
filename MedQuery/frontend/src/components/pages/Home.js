import React from "react";
import "../../App.css";
import "./HeroSection.css"; // Import HeroSection CSS
import Cards from "../CardItem"; // Corrected import for Cards component
import Footer from "../Footer";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <video src="/videos/newvid.mp4" autoPlay loop muted />
        <h1> MedQuery</h1>
        <p>Your Digital Medical Advisor</p>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
