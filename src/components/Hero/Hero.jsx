import React from "react";
import Navbar from "../Navbar";
import accountsBg from "../../assets/accounts-bg.jpeg";
import "./Hero.scss";

const Hero = ({ heading, text, bgImage = accountsBg, trading = false }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className={`hero ${trading ? "hero_trading" : ""}`} style={style}>
      <Navbar />
      <div className="hero_content">
        <h1 className="heading-1">{heading}</h1>
        <p className="body-large">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
