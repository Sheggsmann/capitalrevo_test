import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks";
import Button from "../Button";
import LogoIcon from "../../assets/logo.svg";
import EnglishFlag from "../../assets/eng-flag.png";
import MenuIcon from "../../assets/menu.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronUp from "../../assets/chevron-up.svg";
import "./Navbar.scss";

const MobileLink = ({ link, text, dropdowns }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile_link">
      <div
        className="dropdown_header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`${location.includes(link) ? "navbar_bold" : ""}`}>
          {text}
        </div>

        <div>
          {!isOpen ? (
            <img src={ChevronDown} alt="chevron-down" />
          ) : (
            <img src={ChevronUp} alt="chevron-up" />
          )}
        </div>
      </div>

      <div className="dropdown_container">
        {isOpen &&
          dropdowns.map((dropdown, index) => (
            <div
              className="dropdown_item"
              key={index}
              onClick={() => navigate(dropdown.link)}
            >
              {dropdown.text}
            </div>
          ))}
      </div>
    </div>
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
              dropdowns={[
                { text: "Accounts", link: "/accounts" },
                { text: "Instruments", link: "/instruments" },
                { text: "Withdrawals", link: "/widthdrawals" },
                { text: "Copytrading", link: "/copytrading" },
                { text: "Synthetic Trading", link: "/synthetic_trading" },
              ]}
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

          {isMobile ? (
            <MobileLink
              text="Tools"
              dropdowns={[{ text: "Tools", link: "/tools" }]}
            />
          ) : (
            <WebLink text="Tools" link="/calculator" />
          )}

          {isMobile ? (
            <MobileLink
              text="Partnership"
              dropdowns={[{ text: "Partnership", link: "/partnership" }]}
            />
          ) : (
            <WebLink text="Partnership" link="/partnership" />
          )}

          {isMobile ? (
            <MobileLink
              text="Help"
              link="/contact"
              dropdowns={[{ text: "Help", link: "/contact" }]}
            />
          ) : (
            <WebLink text="Help" link="/contact" />
          )}

          {!isMobile && (
            <span
              className={`${location.includes("/about") ? "navbar_bold" : ""}`}
              onClick={() => navigate("/about")}
            >
              About
            </span>
          )}
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
