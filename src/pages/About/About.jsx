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
import EarthLogo from "../../assets/about/earth.svg";
import SealVariantLogo from "../../assets/about/seal-variant.svg";
import FaceAgentLogo from "../../assets/about/face-agent.svg";
import CashMultipleLogo from "../../assets/about/cash-multiple.svg";
import SchoolOutlineLogo from "../../assets/about/school-outline.svg";
import ChartBarLogo from "../../assets/about/chart-bar.svg";
import Button from "../../components/Button";
import AboutBg from "../../assets/about_bg.png";
import Lines from "../../assets/lines.svg";

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
    logo: EarthLogo,
    heading: "Global Presence",
    text: "Trade in global markets with our expansive network and international expertise.",
  },
  {
    logo: SealVariantLogo,
    heading: "Award Winning Technology",
    text: "Experience trading excellence with our cutting-edge platform and innovative tools.",
  },
  {
    logo: FaceAgentLogo,
    heading: "24/7 Customer Service",
    text: "Get round-the-clock support from our dedicated team, ensuring prompt assistance whenever you need it.",
  },
  {
    logo: CashMultipleLogo,
    heading: "Flexible Deposit Options",
    text: "Enjoy funding methods tailored to your preferences, providing flexibility for your trading needs.",
  },
  {
    logo: SchoolOutlineLogo,
    heading: "Trading Education",
    text: "Expand your knowledge and skills with our comprehensive educational resources to make informed decisions.",
  },
  {
    logo: ChartBarLogo,
    heading: "Technical Analysis",
    text: "Stay ahead of the game with in-depth market insights and analysis, helping you identify profitable trading opportunities.",
  },
];

const About = () => {
  return (
    <div className="about">
      <Hero
        bgImage={AboutBg}
        heading="Global Leading Online Trading Provider"
        text="Capital Revo is a leading global online trading provider, offering trading with Forex and CFDs, indices, precious metals, energy and cryptocurrencies."
      />
      <div className="about_main">
        <div className="about_bg1" />
        <div className="about_bg2" />
        {/* <div className="about_lines" /> */}
        <img src={Lines} alt="aboutLines" className="aboutLines" />

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
                <img src={d.logo} alt="face" />
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
