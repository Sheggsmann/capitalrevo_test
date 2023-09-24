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
import { useTranslation } from "react-i18next";

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

const About = () => {
  const { t } = useTranslation();

  const TradeBoxes = [
    {
      logo: EarthLogo,
      heading: t("about.benefit1.title"),
      text: t("about.benefit2.description"),
    },
    {
      logo: SealVariantLogo,
      heading: t("about.benefit2.title"),
      text: t("about.benefit2.description"),
    },
    {
      logo: FaceAgentLogo,
      heading: t("about.benefit3.title"),
      text: t("about.benefit3.description"),
    },
    {
      logo: CashMultipleLogo,
      heading: t("about.benefit4.title"),
      text: t("about.benefit4.description"),
    },
    {
      logo: SchoolOutlineLogo,
      heading: t("about.benefit5.title"),
      text: t("about.benefit5.description"),
    },
    {
      logo: ChartBarLogo,
      heading: t("about.benefit6.title"),
      text: t("about.benefit6.description"),
    },
  ];
  return (
    <div className="about">
      <Hero
        bgImage={AboutBg}
        heading={t("about.title")}
        text={t("about.titleDescription")}
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
            Capital Revo -{" "}
            <span className="accent"> {t("about.section1Title")} </span>
          </h2>
          <p className="body-large">{t("about.section1Description")}</p>
        </div>

        <div className="about_contentBoxes">
          <ContentBox
            logo={LicenseLogo}
            heading={t("about.card1.title")}
            text={t("about.card1.description")}
          />
          <ContentBox
            logo={SafetyLogo}
            heading={t("about.card2.title")}
            text={t("about.card2.description")}
          />
        </div>
        <Rating
          heading={t("common.excellent")}
          count="724"
          source="TrustPilot"
          color="body"
        />

        <div className="about_investmentBox">
          <InvestmentBox
            heading={t("about.section2Title")}
            text={t("about.section2Description")}
          />
        </div>

        <div className="about_trade">
          <div className="about_tradeContent">
            <h2>{t("about.section3Title")}</h2>
            <p className="body-large">{t("about.section3Description")}</p>
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
              <Button>{t("common.startTrading")}</Button>
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
