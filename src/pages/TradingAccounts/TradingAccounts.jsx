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
import { useTranslation } from "react-i18next";
import "./TradingAccounts.scss";

const TradingAccounts = () => {
  const { t } = useTranslation();

  const AccountsDetails = [
    {
      title: t("accounts.accounts.basic.title"),
      details: t("accounts.accounts.basic.description"),
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
      title: t("accounts.accounts.advanced.title"),
      details: t("accounts.accounts.advanced.description"),
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
      title: t("accounts.accounts.gold.title"),
      details: t("accounts.accounts.gold.description"),
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
      title: t("accounts.accounts.platinum.title"),
      details: t("accounts.accounts.platinum.description"),
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
      title: t("accounts.accounts.diamond.title"),
      details: t("accounts.accounts.diamond.description"),
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
      title: t("accounts.accounts.vip.title"),
      details: t("accounts.accounts.vip.description"),
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

  return (
    <div className="tradingAccounts">
      <Hero
        heading={t("accounts.title")}
        text={t("accounts.titleDescription")}
        trading
      />

      <div className="tradingAccounts_main">
        <div className="tradingAccounts_bg1" />
        <div className="tradingAccounts_bg2" />
        {/* <div className="tradingAccounts_lines" /> */}
        <img src={Lines} alt="tradingLines" className="tradingLines" />

        <div className="tradingAccounts_text">
          <h2>
            {t("accounts.section1Title.text")}{" "}
            <span className="accent"> {t("accounts.section1Title.span")} </span>
          </h2>

          <p className="body-large">{t("accounts.section1Description")}</p>
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
                <h6>{t("accounts.accountType")}</h6>
                {d.title === "Advanced" && (
                  <span className="tradingAccounts_boxStandard">
                    <img src={CheckDecagramLogo} alt="check" />
                    {t("accounts.recommended")}
                  </span>
                )}
              </div>

              <div className="tradingAccounts_boxMain">
                <div className="tradingAccounts_boxContent">
                  <h3>{d.title}</h3>
                  <p>{d.details}</p>

                  <div className="tradingAccounts_boxButtons">
                    <a href="https://client.kwakolmarkets.com/register">
                      <Button>{t("accounts.openAccount")}</Button>
                    </a>
                  </div>
                </div>

                <div className="tradingAccounts_specs">
                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={CurrencyLogo} alt="currency" />
                      <span>{t("accounts.minimumDeposit")}</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.minDeposit}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={SplitArrowLogo} alt="spread" />
                      <span>{t("accounts.spread")}</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.spread}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={ScaleBalanceLogo} alt="leverage" />
                      <span>{t("accounts.leverage")}</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.leverage}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={AccountManagerLogo} alt="account manager" />
                      <span>{t("accounts.accountManager")}</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.manager}
                    </div>
                  </div>

                  {d?.evaluation && (
                    <div className="tradingAccounts_spec">
                      <div className="tradingAccounts_specName">
                        <img src={SpeedometerLogo} alt="portfolio evaluation" />
                        <span>{t("accounts.portfolioEvaluation")}</span>
                      </div>
                      <div className="tradingAccounts_specDetails">
                        {d.evaluation}
                      </div>
                    </div>
                  )}

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={CustomerSupportLogo} alt="customer support" />
                      <span>{t("accounts.customerSupport")}</span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.customerSupport}
                    </div>
                  </div>

                  <div className="tradingAccounts_spec">
                    <div className="tradingAccounts_specName">
                      <img src={TechAnalysisLogo} alt="technical analysis" />
                      <span>
                        {t("accounts.technicalAnalysis")},{" "}
                        {t("accounts.marketNews")}
                      </span>
                    </div>
                    <div className="tradingAccounts_specDetails">
                      {d.technicalAnalysis}
                    </div>
                  </div>
                </div>

                <div className="tradingAccounts_boxButtons mobile">
                  <a href="https://client.kwakolmarkets.com/register">
                    <Button>{t("accounts.openAccount")}</Button>
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
