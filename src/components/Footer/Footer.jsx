import React from "react";
import "./Footer.scss";
import PaypalLogo from "../../assets/paypal.png";
import BitcoinLogo from "../../assets/btc.png";
import USDCoinLogo from "../../assets/usdc.png";
import RazorpayLogo from "../../assets/razorpay.png";
import RupeepayLogo from "../../assets/rupeepay.png";
import SwiftyLogo from "../../assets/swifty.png";
import PaymentrLogo from "../../assets/paymentr.png";
import Help2payLogo from "../../assets/help2pay.png";
import LogoDark from "../../assets/logo-dark.svg";
import FacebookLogo from "../../assets/facebook.svg";
import TwitterLogo from "../../assets/twitter.svg";
import YouTubeLogo from "../../assets/youtube.svg";
import LinkedinLogo from "../../assets/linkedin.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterLogos = [
  PaypalLogo,
  BitcoinLogo,
  USDCoinLogo,
  RazorpayLogo,
  RupeepayLogo,
  SwiftyLogo,
  PaymentrLogo,
  Help2payLogo,
];

const MediaLogos = [FacebookLogo, TwitterLogo, YouTubeLogo, LinkedinLogo];

const Footer = ({ dark = false }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className={`footer ${dark ? "footer_dark" : ""}`}>
      <div className="footer_logos">
        {FooterLogos.map((l, i) => (
          <img src={l} alt="logo" key={i} />
        ))}
      </div>
      <div className="footer_main">
        <div className="footer_contentMain">
          <img src={LogoDark} alt="logo" />
          <div className="footer_text">
            © 2023 Capital Revo · All rights reserved <br />
            Griffith Corporate Centre <br />
            Suite 305, Beachmont, <br />
            Kingstown,St Vincent and Grenadines
          </div>

          <br />
          <div className="footer_descriptionLinks">
            <span>{t("footer.privacy")}</span>
            <span>{t("footer.cookiePolicy")}</span>
          </div>

          <div className="footer_media">
            {MediaLogos.map((l, i) => (
              <img key={i} src={l} alt="logo" />
            ))}
          </div>
        </div>

        <div className="footer_item footer_item1">
          <h4>{t("nav.trading")}</h4>
          <span onClick={() => navigate("/accounts")}>{t("nav.accounts")}</span>
          <span onClick={() => navigate("/calculator")}>
            {t("nav.instruments")}
          </span>
          <span onClick={() => navigate("/deposits")}>
            {t("nav.withdrawalsDeposits")}
          </span>
          <span onClick={() => navigate("/copy-trading")}>
            {t("nav.copytrading")}
          </span>
        </div>
        <div className="footer_item footer_item2">
          <h4>{t("nav.tools")}</h4>
          <span onClick={() => navigate("/calendar")}>
            {t("nav.tradingCalendar")}
          </span>
          <span onClick={() => navigate("/calculator")}>
            {t("nav.forexCalculator")}
          </span>
        </div>
        <div className="footer_item footer_item3">
          <h4>{t("nav.partnership")}</h4>
          <span>{t("nav.introducingBroker")}</span>
          <span onClick={() => navigate("/partnership")}>
            {t("nav.becomeAPartner")}
          </span>
        </div>
        <div className="footer_item footer_item4">
          <h4>{t("nav.help")}</h4>
          <span onClick={() => navigate("/faq")}>{t("nav.faq")}</span>
          <span onClick={() => navigate("/contact")}>{t("nav.contact")}</span>
        </div>

        <div className="footer_description footer_text">
          Contracts for Difference (“CFDs”) are leveraged products and carry a
          high level of risk to your capital as prices may move rapidly against
          you. Losses can exceed your deposits and you may be required to make
          further payments. These products may not be suitable for all clients
          therefore ensure you understand the risks and seek independent advice.
          <br />
          <br />
          Capital Revo Limited with its registered office at No 169, Ademola
          Adetokunbo Crescent, Wuse 2, Abuja. Capital Revo Group is a financial
          technology provider registered under the number 1713236 in BVI.
          Capital Revo products and services are not intended for Belgium, US
          and Canada residents.
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
