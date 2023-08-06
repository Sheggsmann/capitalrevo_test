import React from "react";
import "./Hero.scss";
import Navbar from "../Navbar";

const Hero = ({ heading, text, trading = false }) => {
  return (
    <div className={`hero ${trading ? "hero_trading" : ""}`}>
      <Navbar />
      <div className="hero_content">
        <h1 className="heading-1">{heading}</h1>
        <p className="body-large">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
