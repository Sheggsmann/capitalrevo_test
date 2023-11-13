import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "../../hooks";
import Button from "../Button";
import LogoIcon from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronUp from "../../assets/chevron-up.svg";
import MobileLogo from "./MobileLogo.svg";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";

const MobileLink = ({
  link,
  text,
  dropdowns,
  currentOpenMenu,
  handleMenuToggle,
}) => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const isOpen = currentOpenMenu === text;

  return (
    <div className="mobile_link">
      <div className="dropdown_header" onClick={() => handleMenuToggle(text)}>
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

const flags = {
  en: "https://flagcdn.com/w160/gb.png",
  it: "https://flagcdn.com/w160/it.png",
  es: "https://flagcdn.com/w160/es.png",
  ae: "https://flagcdn.com/w160/ae.png",
  pt: "https://flagcdn.com/w160/pt.png",
  in: "https://flagcdn.com/w160/in.png",
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentOpenMenu, setCurrentOpenMenu] = useState(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [flagUrl, setFlagUrl] = useState(flags.en);
  const location = window.location.pathname;

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const menuRef = useRef();

  useLayoutEffect(() => {
    setFlagUrl(flags[i18n.language]);
  }, [i18n.language]);

  useClickOutside(menuRef, () => {
    if (!isMobile) return;
    setMenuOpen(false);
    setLangMenuOpen(false);
  });

  const handleMenuToggle = (menu) => {
    if (currentOpenMenu === menu) {
      setCurrentOpenMenu(null);
    } else {
      setCurrentOpenMenu(menu);
    }
  };

  const handleLangMenuClick = (lang) => {
    setFlagUrl(flags[lang]);
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img
        src={isMobile ? MobileLogo : LogoIcon}
        alt="logo"
        className="navbar_logo"
        onClick={() => navigate("/")}
      />

      <div className="navbar_main" ref={menuRef}>
        <div className={`navbar_links ${menuOpen ? "open" : ""}`}>
          {isMobile ? (
            <MobileLink
              text={t("nav.trading")}
              link="/accounts"
              dropdowns={[
                { text: t("nav.accounts"), link: "/accounts" },
                { text: t("nav.withdrawals"), link: "/deposits" },
                { text: t("nav.copytrading"), link: "/copy-trading" },
              ]}
              currentOpenMenu={currentOpenMenu}
              handleMenuToggle={handleMenuToggle}
            />
          ) : (
            <WebLink text={t("nav.trading")} link="/accounts" />
          )}

          {isMobile ? (
            <MobileLink
              text={t("nav.tools")}
              dropdowns={[
                { text: t("nav.tradingCalendar"), link: "/calendar" },
                { text: t("nav.forexCalculator"), link: "/calculator" },
              ]}
              currentOpenMenu={currentOpenMenu}
              handleMenuToggle={handleMenuToggle}
            />
          ) : (
            <WebLink text={t("nav.tools")} link="/calculator" />
          )}

          {isMobile ? (
            <MobileLink
              text={t("nav.partnership")}
              dropdowns={[
                { text: t("nav.introducingBroker"), link: "/partnership" },
                { text: t("nav.becomeAPartner"), link: "/partnership" },
              ]}
              currentOpenMenu={currentOpenMenu}
              handleMenuToggle={handleMenuToggle}
            />
          ) : (
            <WebLink text={t("nav.partnership")} link="/partnership" />
          )}

          {isMobile ? (
            <MobileLink
              text={t("nav.help")}
              link="/contact"
              dropdowns={[
                { text: t("nav.faq"), link: "/faq" },
                { text: t("nav.knowledgeBase"), link: "/contact" },
                { text: t("nav.contact"), link: "/contact" },
              ]}
              currentOpenMenu={currentOpenMenu}
              handleMenuToggle={handleMenuToggle}
            />
          ) : (
            <WebLink text={t("nav.help")} link="/contact" />
          )}

          {!isMobile && (
            <span
              className={`${location.includes("/about") ? "navbar_bold" : ""}`}
              onClick={() => navigate("/about")}
            >
              {t("nav.about")}
            </span>
          )}
        </div>

        <div className="navbar_buttonsContainer">
          <a href="https://client.kwakolmarkets.com/login" className="login">
            <Button outline>{t("nav.login")}</Button>
          </a>
          <a href="https://client.kwakolmarkets.com/register">
            <Button>{t("nav.signup")}</Button>
          </a>

          <div className="navbar_language">
            <img
              src={flagUrl}
              alt="flag"
              className="navbar_language"
              onClick={() => setLangMenuOpen(true)}
            />

            {langMenuOpen && (
              <div className="languages_container">
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("en")}
                >
                  English
                </div>
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("it")}
                >
                  Italiano
                </div>
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("es")}
                >
                  Español
                </div>
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("ae")}
                >
                  اردو
                </div>
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("pt")}
                >
                  Português
                </div>
                <div
                  className="language"
                  onClick={() => handleLangMenuClick("in")}
                >
                  Hindi
                </div>
              </div>
            )}
          </div>

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
