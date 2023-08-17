import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Rating from "../../components/Rating";
import Accounts from "../../components/Accounts";
import StepBox from "../../components/StepBox";
import Footer from "../../components/Footer";
import HomeHorizontalLines from "../../assets/home-horizontal-lines.png";
import Screen from "../../assets/screens.png";
import HomeVerticalLines from "../../assets/home-vertical-lines.png";
import DollarCircleIcon from "../../assets/dollar-circle.svg";
import PlusCircleIcon from "../../assets/plus-circle.svg";
import JoinLogo from "../../assets/join.svg";
import Step2Logo from "../../assets/step-2-1.svg";
import DepositLogo from "../../assets/deposit.svg";
import BarrelLogo from "../../assets/barrel-outline.svg";
import FinanceLogo from "../../assets/finance.svg";
import GoldLogo from "../../assets/gold.svg";
import BTCLogo from "../../assets/currency-btc.svg";
import EarthBox from "../../components/EarthBox/EarthBox";
import SectionBox from "../../components/SectionBox/SectionBox";
import HomeHandomseMan from "../../assets/home_handomse_man.png";

const TradingInstrumentsData = [
  {
    name: "Forex",
    image: DollarCircleIcon,
  },
  {
    name: "Energy",
    image: BarrelLogo,
  },
  {
    name: "Stocks",
    image: FinanceLogo,
  },
  {
    name: "Metals",
    image: GoldLogo,
  },
  {
    name: "Cryptocurrency CFDs",
    image: BTCLogo,
  },
];

const StartSteps = [
  {
    image: JoinLogo,
    name: "Register",
    details: "Register and activate your account",
  },
  {
    image: Step2Logo,
    name: "Deposit",
    details: "Make a deposit via bank transfer, wire or debit card",
  },
  {
    image: DepositLogo,
    name: "Trade",
    details: "Get approved and start trading",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home_top">
        <img
          src={HomeVerticalLines}
          className="home_verticalLines"
          alt="lines"
          loading="lazy"
        />

        <header className="header">
          <img
            src={HomeHorizontalLines}
            className="header_horizontalLines"
            alt="lines"
            loading="lazy"
          />

          <Navbar />

          <div className="header_content">
            <div className="header_details">
              <h1 className="heading-1 mb-1">
                Trade Forex with CFDs with the
                <span className="accent"> world's # 1 broker</span>
              </h1>
              <p className="body-large mb-3">
                Trade forex with unbeatable spreads, negative balance
                protection, 0% commissions, and award winning 24/7 support
              </p>

              <a
                href="https://client.kwakolmarkets.com/register"
                className="header-cta"
              >
                <Button>Start Trading</Button>
              </a>
            </div>

            <div className="header_image">
              <img src={Screen} alt="screens" loading="lazy" />
            </div>

            <a
              href="https://client.kwakolmarkets.com/register"
              className="header-cta-mobile"
            >
              <Button>Start Trading</Button>
            </a>
          </div>

          <div className="header_reviews">
            <Rating heading="Excellent" count="724" source="TrustPilot" />
          </div>
        </header>
      </div>

      <div className="home_main">
        <div className="home_bg1" />
        <div className="home_bg2" />
        <div className="home_mainLines" />

        <section className="home_trading">
          <div className="home_tradingHeading">
            <h2>
              Trade <span className="accent"> 100+ Instruments </span>
              with an Award-Winning Broker
            </h2>
            <p className="body-large ">
              Diversify your investment portfolio by trading CFDs on more than
              just Forex.
            </p>
          </div>

          <div className="home_tradingMain">
            {TradingInstrumentsData.map((d, i) => (
              <div key={i} className="home_tradingBox">
                <img src={d.image} alt="dollar" loading="lazy" />
                <p>{d.name}</p>
                <button>
                  <img src={PlusCircleIcon} alt="plus" loading="lazy" />
                </button>
              </div>
            ))}
          </div>
          <div className="home_tradingButton">
            <a href="https://client.kwakolmarkets.com/register">
              <Button>Start trading</Button>
            </a>
            {/* <p>or try Demo Account</p> */}
          </div>
        </section>

        <SectionBox
          bgImage={HomeHandomseMan}
          tabs
          heading="Why trade with Capital Revo"
          text="Capital Revo founded in 2015 is a leading online trading provider,
                 offering trading with Forex, Indices, Precious Metals and Energy."
        />

        <section className="home_startSteps">
          <h3>Start in less than 5 minutes</h3>

          <div className="home_startStepsMain">
            {StartSteps.map((d, i) => (
              <StepBox
                key={i}
                number={i + 1}
                image={d.image}
                name={d.name}
                details={d.details}
              />
            ))}
          </div>
          <div className="home_startStepsButton">
            <a href="https://client.kwakolmarkets.com/register">
              <Button>Start trading</Button>
            </a>
            {/* <p>or try Demo Account</p> */}
          </div>
        </section>

        <Accounts />

        <div className="home_bottomText">
          <b>Risk warning</b>: CFDs are complex instruments and come with a high
          risk of losing money rapidly due to leverage.
          <b>
            {" "}
            71% of retail investor accounts lose money when trading CFDs with
            this provider
          </b>
          . You should consider whether you understand how CFDs work and whether
          you can afford to take the high risk of losing your money.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
