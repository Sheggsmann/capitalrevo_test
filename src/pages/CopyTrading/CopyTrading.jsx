import React from "react";
import "./CopyTrading.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import InvestmentBox from "../../components/InvestmentBox";
import ShieldAccountLogo from "../../assets/copy_trading/shield-account-outline.svg";
import HexagonLogo from "../../assets/copy_trading/professional-hexagon.svg";
import TimerCheckLogo from "../../assets/copy_trading/timer-check-outline.svg";
import CopyTradingBg from "../../assets/copytrading_bg.png";
import CopyTradingSectionImg from "../../assets/copy_trading_section.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";

const StartSteps = [
  {
    logo: HexagonLogo,
    heading: "Benefit from expert's work",
    text: "Gain from proven trading strategies of experienced professionals",
    details: "A time-saving way to earn passive income",
  },
  {
    logo: TimerCheckLogo,
    heading: "Save time",
    text: "Skip the research and analysis by automatically copying trades of successful traders.",
    details: "Seamless and optimised order execution",
  },
  {
    logo: ShieldAccountLogo,
    heading: "Less risk",
    text: "Mitigate potential losses by diversifying your portfolio through copytrading.",
    details: "An easy and intuitive platform, open to all",
  },
];

const Traders = [1, 2, 3, 4, 5];

const TraderBox = () => {
  const { t } = useTranslation();
  return (
    <div className="copyTrading_box">
      <span>{t("copyTrading.trade")}</span>
      <Button>{t("copyTrading.copy")}</Button>
    </div>
  );
};

const CopyTrading = () => {
  const { t } = useTranslation();

  return (
    <div className="copyTrading">
      <Hero
        bgImage={CopyTradingBg}
        heading={t("copyTrading.title")}
        text={t("copyTrading.titleDescription")}
      />
      <div className="copyTrading_main">
        <div className="copyTrading_bg1" />
        <div className="copyTrading_bg2" />
        {/* <div className="copyTrading_lines" /> */}
        <img src={Lines} alt="copyTrading Lines" className="copyTradingLines" />

        <div className="copyTrading_content1">
          <h2>{t("copyTrading.section1Title")}</h2>
          <p className="body-large">{t("copyTrading.section1Description")}</p>
        </div>

        <div className="copyTrading_steps">
          {StartSteps.map((d, i) => (
            <div key={i} className="copyTrading_stepsBox">
              <img src={d.logo} alt="face" />
              <h3>{d.heading}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="copyTrading_content">
          <h2>{t("copyTrading.section2Title")}</h2>
          <p>{t("copyTrading.section2Description")}</p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <div className="copyTrading_content">
          <h2>{t("copyTrading.section3Title")}</h2>
          <p>{t("copyTrading.section3Description")}</p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <div className="copyTrading_content">
          <h2>{t("copyTrading.section4Title")}</h2>
          <p>{t("copyTrading.section4Description")}</p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <InvestmentBox
          heading={t("copyTrading.section5Title")}
          text={t("copyTrading.section5Description")}
          image={CopyTradingSectionImg}
        />
        <p className="body-large">
          {/* Capital Revo Copytrading is a system that facilitates the management
          of funds placed in multiple separate accounts to be managed by one or
          more account holder(s), the manager(s). Past performance is not
          indicative of future results and no representation is being made by
          the Company in relation to certain results that may be achieved by
          investing in a PAMM Manager or that clients will or are likely to
          achieve profits or incur losses comparable to those that may be shown. */}
          {t("copyTrading.copyTradingFooter").substring(0, 474)}
          <br /> <br />
          {/* Prior to investing in a PAMM Manager you need to carefully consider
          any risks including but not limited to those involved in trading. The
          Company does not recommend the selection of any PAMM Manager. This
          responsibility lies solely with the investor. Therefore, Capital Revo
          Ltd. is under no circumstances, liable and/or responsible for any
          losses that arise out of the use of Copytrading. */}
          {t("copyTrading.copyTradingFooter").substring(474, 865)}
          <br /> <br />
          {/* Even if all reasonable efforts have been made by the Company to ensure
          the proper statistical reporting of PAMM Managers Performance, the
          Company cannot guarantee the accuracy of performance and/or results of
          any PAMM Manager. */}
          {t("copyTrading.copyTradingFooter").substring(865)}
        </p>
      </div>
      <Footer dark />
    </div>
  );
};

export default CopyTrading;
