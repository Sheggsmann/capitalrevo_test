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
            <span>Privacy</span>
            <span>Cookie Policy</span>
          </div>

          <div className="footer_media">
            {MediaLogos.map((l, i) => (
              <img key={i} src={l} alt="logo" />
            ))}
          </div>
        </div>

        <div className="footer_item footer_item1">
          <h4>Trading</h4>
          <span onClick={() => navigate("/accounts")}>Accounts</span>
          <span onClick={() => navigate("/calculator")}>Instruments</span>
          <span onClick={() => navigate("/deposits")}>
            Withdrawals and Deposits
          </span>
          <span onClick={() => navigate("/copy-trading")}>Copytrading</span>
          <span>Synthetic Trading</span>
        </div>
        <div className="footer_item footer_item2">
          <h4>TOOLS</h4>
          <span>Web Trader</span>
          <span>Mobile App</span>
          <span onClick={() => navigate("/calendar")}>Trading Calendar</span>
          <span onClick={() => navigate("/calculator")}>Forex Calculator</span>
        </div>
        <div className="footer_item footer_item3">
          <h4>PARTNERSHIP</h4>
          <span>Introducing broker</span>
          <span onClick={() => navigate("/partnership")}>Become a partner</span>
        </div>
        <div className="footer_item footer_item4">
          <h4>HELP</h4>
          <span onClick={() => navigate("/faq")}>FAQ</span>
          <span>Knowledge Base</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
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
