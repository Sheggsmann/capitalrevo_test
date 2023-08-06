import React from "react";
import "./About.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import CurrencyIndicator from "../../components/CurrencyIndicator";
import ContentBox from "../../components/ContentBox";
import Rating from "../../components/Rating";
import InvestmentBox from "../../components/InvestmentBox";
import LicenseLogo from "../../assets/license.svg";
import SafetyLogo from "../../assets/safety.svg";
import FaceAgentLogo from "../../assets/face-agent.svg";
import Button from "../../components/Button";

const CurrencyData = [
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
];

const TradeBoxes = [
  {
    heading: "Global Presence",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
  {
    heading: "Award Winning Technology",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
  {
    heading: "Top-notch customer service",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
  {
    heading: "Flexible Deposit Options",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
  {
    heading: "Education ",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
  {
    heading: "Analysis ",
    text: "Capital Group is now a global organization with regulated trading companies offering .",
  },
];

const About = () => {
  return (
    <div className="about">
      <Hero
        heading="Global Leading Online Trading Provider"
        text="Capital Revo is a leading global online trading provider, offering trading with Forex and CFDs, indices, precious metals, energy and cryptocurrencies."
      />
      <div className="about_main">
        <div className="about_bg1" />
        <div className="about_bg2" />
        <div className="about_lines" />

        <div className="about_currencies">
          {CurrencyData.map((d, i) => (
            <CurrencyIndicator
              key={i}
              value={d.value}
              percentage={d.percentage}
            />
          ))}
        </div>

        <div className="about_content">
          <h2>
            Capital Revo - <span className="accent"> A Trusted Broker </span>
          </h2>
          <p className="body-large">
            Our mission is to provide our clients with a comprehensive trading
            experience that is educational, intuitive and empowering
          </p>
        </div>

        <div className="about_contentBoxes">
          <ContentBox
            logo={LicenseLogo}
            heading="Licences and regulation"
            text="CapitalRevo operates under Kwakol Markets PTY Limited, an authorized Finance company, by Australia Security and Investment Commision (ASIC) with the A.C.N 656 656 665. Kwakol Markets is an authorized money service business by FINTRAC Money Services Canada; the registration number is M22699427."
          />
          <ContentBox
            logo={SafetyLogo}
            heading="Reliability, security and speed"
            text="We offer Contracts for Difference (CFDs) on 6 asset classes: Forex, Shares, Spot Indices, Futures, Spot Metals and Spot Energy. We provide our clients with access to top-tier liquidity and advanced trade execution with no dealing desk intervention."
          />
        </div>
        <Rating
          heading="Excellent"
          count="724"
          source="TrustPilot"
          color="body"
        />

        <div className="about_investmentBox">
          <InvestmentBox
            heading="Certified Investmet"
            text="Deposits to trading accounts can be made in most national currencies. Additionally, if you want to protect your capital from currency fluctuation, you can have multiple trading accounts in different currencies at the same time. "
          />
        </div>

        <div className="about_trade">
          <div className="about_tradeContent">
            <h2>Why Trade With Capital Revo</h2>
            <p className="body-large">
              Our strong dedication to state-of-the-art software and quality
              assurance means that our clients receive the best, most
              transparent trading experience.
            </p>
          </div>

          <div className="about_tradeBoxes">
            {TradeBoxes.map((d, i) => (
              <div key={i} className="about_tradeBox">
                <img src={FaceAgentLogo} alt="face" />
                <h3>{d.heading}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <div className="about_tradeButton">
            <a href="https://client.kwakolmarkets.com/register">
              <Button>Start trading</Button>
            </a>
            {/* <p>or try Demo Account</p> */}
          </div>
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default About;
