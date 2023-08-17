import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks";
import Button from "../Button";
import LogoIcon from "../../assets/logo.svg";
import EnglishFlag from "../../assets/eng-flag.png";
import MenuIcon from "../../assets/menu.svg";
import "./Navbar.scss";

const MobileLink = ({ link, text, dropdowns }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <span className={`${location.includes(link) ? "navbar_bold" : ""}`}></span>
  );
};

const WebLink = ({ link, text }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <span
      className={`${location.includes(link) ? "navbar_bold" : ""}`}
      onClick={() => navigate(link)}
    >
      {text}
    </span>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = window.location.pathname;

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log(isMobile);

  return (
    <nav className="navbar">
      <img
        src={LogoIcon}
        alt="logo"
        className="navbar_logo"
        onClick={() => navigate("/")}
      />

      <div className="navbar_main">
        <div className={`navbar_links ${menuOpen ? "open" : ""}`}>
          {isMobile ? (
            <MobileLink
              text="Trading"
              link="/accounts"
              dropdowns={[{ text: "Accounts", link: "/accounts" }]}
            />
          ) : (
            <WebLink text="Trading" link="/accounts" />
          )}
          {/* <span
            className={`${location.includes("/accounts") ? "navbar_bold" : ""}`}
            onClick={() => navigate("/accounts")}
          >
            Trading
          </span> */}

          <span
            className={`${
              location.includes("/calculator") ? "navbar_bold" : ""
            }`}
            onClick={() => navigate("/calculator")}
          >
            Tools
          </span>
          <span
            className={`${
              location.includes("/partnership") ? "navbar_bold" : ""
            }`}
            onClick={() => navigate("/partnership")}
          >
            Partnership
          </span>
          <span
            className={`${location.includes("/contact") ? "navbar_bold" : ""}`}
            onClick={() => navigate("/contact")}
          >
            Help
          </span>
          <span
            className={`${location.includes("/about") ? "navbar_bold" : ""}`}
            onClick={() => navigate("/about")}
          >
            About
          </span>
        </div>

        <div className="navbar_buttonsContainer">
          <a href="https://client.kwakolmarkets.com/login" className="login">
            <Button outline>Log in</Button>
          </a>
          <a href="https://client.kwakolmarkets.com/register">
            <Button>Sign up</Button>
          </a>
          <img src={EnglishFlag} alt="flag" className="navbar_language" />
        </div>

        <div className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
          <img src={MenuIcon} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
