import React from "react";
import "../../App.css";
import "./HeroSection.css";
import Cards from "../CardItem";
import Footer from "../Footer";
import Navbar from "../Navbar";

import ChatBotButton from "../chatBot/ChatBotButton";
import ChatBotCart from "../chatBot/ChatBotCart";
import { useSelector } from "react-redux";

function Home() {
  const showModal = useSelector((state) => state.modal.modalIsOpen);

  return (
    <>
      <Navbar />
      {showModal && <ChatBotCart />}
      <div className="hero-container">
        <video src="/videos/newvid.mp4" autoPlay loop muted />
        <h1>Welcome to MedQuery</h1>
        <p>Your Digital Medical Advisor</p>
      </div>
      <ChatBotButton />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
