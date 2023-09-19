import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import BeginnerLogo from "../../assets/beginner-logo.svg";
import CheckDecagramLogo from "../../assets/check-decagram.svg";
import CurrencyLogo from "../../assets/currency-usd.svg";
import SplitArrowLogo from "../../assets/arrow-split-vertical.svg";
import ScaleBalanceLogo from "../../assets/scale-balance.svg";
import SpeedometerLogo from "../../assets/speedometer.svg";
import StandardLogo from "../../assets/standard.svg";
import VIPLogo from "../../assets/VIP_1.svg";
import AccountManagerLogo from "../../assets/account-star-outline.svg";
import CustomerSupportLogo from "../../assets/face-agent.svg";
import TechAnalysisLogo from "../../assets/chart-waterfall.svg";
import ProfessionalLogo from "../../assets/professional.svg";
import Lines from "../../assets/lines.svg";
import "./TradingAccounts.scss";

const AccountsDetails = [
  {
    title: "Basic",
    details:
      "Start your trading journey with our Basic Account. Access essential trading tools and market research to make informed decisions.",
    logo: BeginnerLogo,
    minDeposit: "$250",
    spread: "Floating from 3 pips",
    leverage: "Up to 1:100",
    manager: "1 session",
    // evaluation: "Monthly",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
  {
    title: "Advanced",
    details:
      "Take your trading skills to the next level with our Advanced Account. Enjoy advanced charting features and personalized support.",
    logo: StandardLogo,
    minDeposit: "$10,000",
    spread: "Floating from 2.25 pips",
    leverage: "Up to 1:200",
    manager: "Senior",
    evaluation: "Quaterly",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
  {
    title: "Gold",
    details:
      "Experience the benefits of our Gold Account. Unlock premium trading features, exclusive market insights, and priority customer service.",
    logo: StandardLogo,
    minDeposit: "$25,000",
    spread: "Floating from 1.65 pips",
    leverage: "Up to 1:300",
    manager: "Senior",
    evaluation: "Quaterly",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
  {
    title: "Platinum",
    details:
      "Basic account is ideal for traders looking for a traditional trading experience. The Standard account offers ultra-competitive spreads without any commissions.",
    logo: ProfessionalLogo,
    minDeposit: "$100,000",
    spread: "Floating from 1.2 pips",
    leverage: "Up to 1:400",
    manager: "Senior",
    evaluation: "Monthly",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
  {
    title: "Diamond",
    details:
      "Elevate your trading experience with our Platform Account. Enjoy enhanced trading conditions, dedicated account manage, and tailored investment strategies",
    logo: ProfessionalLogo,
    minDeposit: "$250,000",
    spread: "Floating from 0.9 pips",
    leverage: "Up to 1:500",
    manager: "Senior",
    evaluation: "Monthly",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
  {
    title: "VIP",
    details:
      "Join our most priviledged traders with our VIP Account. Enjoy unparalleled benefits, personalized services, and exclusive perks for your trading success",
    logo: VIPLogo,
    minDeposit: "$1,000,000",
    spread: "Floating from 0.5 pips",
    leverage: "Up to 1:1000",
    manager: "Senior",
    evaluation: "Daily",
    customerSupport: "24/7",
    technicalAnalysis: "Yes",
  },
];

const TradingAccounts = () => {
  return (
    <div className="tradingAccounts">
      <Hero
        heading="Trading Accounts"
        text="Capital Revo offers a wide range of account types, all designed to suit a diverse range of trading styles."
        trading
      />

      <div className="tradingAccounts_main">
        <div className="tradingAccounts_bg1" />
        <div className="tradingAccounts_bg2" />
        {/* <div className="tradingAccounts_lines" /> */}
        <img src={Lines} alt="tradingLines" className="tradingLines" />

        <div className="tradingAccounts_text">
          <h2>
            Accounts For <span className="accent"> Every Trader </span>
          </h2>

          <p className="body-large">
            Unlock your trading potential with our diverse range of accounts.
            Choose from Basic, Advanced, Gold, Platinum, Diamond, and VIP
            options for personalized trading experiences and exclusive benefits.
          </p>
        </div>

        <div className="tradingAccounts_boxes">
          {AccountsDetails.map((d, i) => (
            <div key={i} className="tradingAccounts_box">
              <img
                className="tradingAccounts_boxLogo"
                src={d.logo}
                alt="logo"
                loading="lazy"
              />
              <div className="tradingAccounts_boxText">
                <h6>Account type</h6>
                {d.title === "Advanced" && (
                  <span className="tradingAccounts_boxStandard">
                    <img src={CheckDecagramLogo} alt="check" />
                    Recommended
                  </span>
                )}
              </div>

              <div className="tradingAccounts_boxMain">
                <div className="tradingAccounts_boxContent">
                  <h3>{d.title}</h3>
                  <p>{d.details}</p>

                  <div className="tradingAccounts_boxButtons">
                    <a href="https://client.kwakolmarkets.com/register">
                      <Button>Open account</Button>
                    </a>
                  </div>
                </div>

                <div className="tradingAccounts_specs">
                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={CurrencyLogo} alt="currency" />
                      <span>Minimum deposit</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.minDeposit}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={SplitArrowLogo} alt="spread" />
                      <span>Spread</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.spread}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={ScaleBalanceLogo} alt="leverage" />
                      <span>Leverage</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.leverage}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={AccountManagerLogo} alt="account manager" />
                      <span>Account Manager</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.manager}
                    </div>
                  </div>

                  {d?.evaluation && (
                    <div className="tradingAccounts_spec">
                      <div className="tradingAccounts_specName">
                        <img src={SpeedometerLogo} alt="portfolio evaluation" />
                        <span>Portfolio evaluation</span>
                      </div>
                      <div className="tradingAccounts_specDetails">
                        {d.evaluation}
                      </div>
                    </div>
                  )}

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={CustomerSupportLogo} alt="customer support" />
                      <span>Customer support</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.customerSupport}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={TechAnalysisLogo} alt="technical analysis" />
                      <span>Technical analysis, market news</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.technicalAnalysis}
                    </div>
                  </div>
                </div>

                <div className="tradingAccounts_boxButtons mobile">
                  <a href="https://client.kwakolmarkets.com/register">
                    <Button>Open account</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default TradingAccounts;
