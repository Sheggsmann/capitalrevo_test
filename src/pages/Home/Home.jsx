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
import SectionBox from "../../components/SectionBox/SectionBox";
import HomeHandomseMan from "../../assets/home_handomse_man.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const TradingInstrumentsData = [
    {
      name: t("home.forex"),
      image: DollarCircleIcon,
    },
    {
      name: t("home.energy"),
      image: BarrelLogo,
    },
    {
      name: t("home.stocks"),
      image: FinanceLogo,
    },
    {
      name: t("home.metals"),
      image: GoldLogo,
    },
    {
      name: t("home.cryptocurrencyCfd"),
      image: BTCLogo,
    },
  ];

  const StartSteps = [
    {
      image: JoinLogo,
      name: t("home.card1.title"),
      details: t("home.card1.description"),
    },
    {
      image: Step2Logo,
      name: t("home.card2.title"),
      details: t("home.card2.description"),
    },
    {
      image: DepositLogo,
      name: t("home.card3.title"),
      details: t("home.card3.description"),
    },
  ];

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
                {t("home.title").substring(0, 30)}
                <span className="accent"> {t("home.title").substring(30)}</span>
              </h1>
              <p className="body-large mb-3">{t("home.titleDescription")}</p>

              <a
                href="https://client.kwakolmarkets.com/register"
                className="header-cta"
              >
                <Button>{t("common.startTrading")}</Button>
              </a>
            </div>

            <div className="header_image">
              <img src={Screen} alt="screens" loading="lazy" />
            </div>

            <a
              href="https://client.kwakolmarkets.com/register"
              className="header-cta-mobile"
            >
              <Button>{t("common.startTrading")}</Button>
            </a>
          </div>

          <div className="header_reviews">
            <Rating
              heading={t("common.excellent")}
              count="724"
              source="TrustPilot"
            />
          </div>
        </header>
      </div>

      <div className="home_main">
        <div className="home_bg1" />
        <div className="home_bg2" />
        {/* <div className="home_mainLines" /> */}
        <img src={Lines} alt="homeLines" className="homeLines" />

        <section className="home_trading">
          <div className="home_tradingHeading">
            <h2 className="text-primary">
              {t("home.section1Title").substring(0, 5)}
              <span className="accent">
                {" "}
                {t("home.section1Title").substring(5, 22)}{" "}
              </span>
              {t("home.section1Title").substring(22)}
            </h2>
            <p className="body-large ">{t("home.section1Description")}</p>
          </div>

          <div className="home_tradingMain">
            {TradingInstrumentsData.map((d, i) => (
              <a href="https://client.kwakolmarkets.com/login">
                <div key={i} className="home_tradingBox">
                  <img src={d.image} alt="dollar" loading="lazy" />
                  <p>{d.name}</p>
                  <button>
                    <img src={PlusCircleIcon} alt="plus" loading="lazy" />
                  </button>
                </div>
              </a>
            ))}
          </div>
          <div className="home_tradingButton">
            <a href="https://client.kwakolmarkets.com/register">
              <Button>{t("common.startTrading")}</Button>
            </a>
            {/* <p>or try Demo Account</p> */}
          </div>
        </section>

        <SectionBox
          bgImage={HomeHandomseMan}
          tabs
          heading={t("home.section2Title")}
          text={t("home.section2Description")}
        />

        <section className="home_startSteps">
          <h3 className="text-primary">{t("home.section3Title")}</h3>

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
              <Button>{t("common.startTrading")}</Button>
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
