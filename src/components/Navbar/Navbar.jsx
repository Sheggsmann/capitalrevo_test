import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "../../hooks";
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
              onClick={() => {
                if (dropdown.link) {
                  navigate(dropdown.link);
                }
              }}
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
      onClick={() => {
        if (link) navigate(link);
      }}
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

  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    if (!isMobile) return;
    setMenuOpen(false);
  });

  return (
    <nav className="navbar">
      <img
        src={LogoIcon}
        alt="logo"
        className="navbar_logo"
        onClick={() => navigate("/")}
      />

      <div className="navbar_main" ref={menuRef}>
        <div className={`navbar_links ${menuOpen ? "open" : ""}`}>
          {isMobile ? (
            <MobileLink
              text="Trading"
              link="/accounts"
              dropdowns={[
                { text: "Accounts", link: "/accounts" },
                { text: "Instruments", link: "" },
                { text: "Withdrawals", link: "/deposits" },
                { text: "Copytrading", link: "/copy-trading" },
                { text: "Synthetic Trading", link: "" },
              ]}
            />
          ) : (
            <WebLink text="Trading" link="/accounts" />
          )}

          {isMobile ? (
            <MobileLink
              text="Tools"
              dropdowns={[
                { text: "Web Trader", link: "" },
                { text: "Mobile App", link: "" },
                { text: "Trading Calendar", link: "/calendar" },
                { text: "Forex Calculator", link: "/calculator" },
              ]}
            />
          ) : (
            <WebLink text="Tools" link="/calculator" />
          )}

          {isMobile ? (
            <MobileLink
              text="Partnership"
              dropdowns={[
                { text: "Introducing Broker", link: "/partnership" },
                { text: "Become a partner", link: "/partnership" },
              ]}
            />
          ) : (
            <WebLink text="Partnership" link="/partnership" />
          )}

          {isMobile ? (
            <MobileLink
              text="Help"
              link="/contact"
              dropdowns={[
                { text: "FAQ", link: "/faq" },
                { text: "Knowledge Base", link: "/contact" },
                { text: "Contact", link: "/contact" },
              ]}
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
          {isMobile && (
            <a
              href="https://client.kwakolmarkets.com/login"
              className="navbar_user_icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.02"
                height="31.99"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M11.5 20.78C8.625 20.78 6.0835 19.308 4.6 17.1C4.6345 14.8 9.2 13.535 11.5 13.535C13.8 13.535 18.3655 14.8 18.4 17.1C16.9165 19.308 14.375 20.78 11.5 20.78ZM11.5 4.45C12.415 4.45 13.2925 4.81348 13.9395 5.46048C14.5865 6.10748 14.95 6.985 14.95 7.9C14.95 8.815 14.5865 9.69252 13.9395 10.3395C13.2925 10.9865 12.415 11.35 11.5 11.35C10.585 11.35 9.70748 10.9865 9.06048 10.3395C8.41348 9.69252 8.05 8.815 8.05 7.9C8.05 6.985 8.41348 6.10748 9.06048 5.46048C9.70748 4.81348 10.585 4.45 11.5 4.45ZM11.5 1C9.9898 1 8.49438 1.29746 7.09914 1.87539C5.7039 2.45331 4.43615 3.3004 3.36827 4.36827C1.2116 6.52494 0 9.45001 0 12.5C0 15.55 1.2116 18.4751 3.36827 20.6317C4.43615 21.6996 5.7039 22.5467 7.09914 23.1246C8.49438 23.7025 9.9898 24 11.5 24C14.55 24 17.4751 22.7884 19.6317 20.6317C21.7884 18.4751 23 15.55 23 12.5C23 6.1405 17.825 1 11.5 1Z"
                  fill="white"
                />
              </svg>
            </a>
          )}
        </div>

        <div className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
          <img src={MenuIcon} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
