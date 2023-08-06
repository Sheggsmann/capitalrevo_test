import React from "react";
import "./Navbar.scss";
import Button from "../Button";
import LogoIcon from "../../assets/logo.svg";
import EnglishFlag from "../../assets/eng-flag.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = window.location.pathname;
  console.log("location", location);

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img
        src={LogoIcon}
        alt="logo"
        className="navbar_logo"
        onClick={() => navigate("/")}
      />

      <div className="navbar_main">
        <span
          className={`${location.includes("/accounts") ? "navbar_bold" : ""}`}
          onClick={() => navigate("/accounts")}
        >
          Trading
        </span>
        <span
          className={`${location.includes("/calculator") ? "navbar_bold" : ""}`}
          onClick={() => navigate("/calculator")}
        >
          Tools
        </span>
        <span
          className={`${
            location.includes("/copy-trading") ? "navbar_bold" : ""
          }`}
          onClick={() => navigate("/copy-trading")}
        >
          Partnership
        </span>
        <span
          className={`${location.includes("/calendar") ? "navbar_bold" : ""}`}
          onClick={() => navigate("/calendar")}
        >
          Help
        </span>
        <span
          className={`${location.includes("/about") ? "navbar_bold" : ""}`}
          onClick={() => navigate("/about")}
        >
          About
        </span>
        <div className="navbar_buttonsContainer">
          <a href="https://client.kwakolmarkets.com/login">
            <Button outline>Log in</Button>
          </a>
          <a href="https://client.kwakolmarkets.com/register">
            <Button>Sign up</Button>
          </a>
          <img src={EnglishFlag} alt="flag" className="navbar_language" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
