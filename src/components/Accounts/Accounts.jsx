import React from "react";
import "./Accounts.scss";
import Button from "../Button";
import BeginnerLogo from "../../assets/beginner-logo.svg";
import StandardLogo from "../../assets/standard.svg";
import ProfessionalLogo from "../../assets/professional.svg";
import { useTranslation } from "react-i18next";

const Accounts = () => {
  const { t } = useTranslation();

  const AccountsData = [
    {
      title: t("tradeAccounts.basic.title"),
      image: BeginnerLogo,
      tagLine: t("tradeAccounts.basic.description"),
      benefits: [
        t("tradeAccounts.basic.benefit1"),
        t("tradeAccounts.basic.benefit2"),
        t("tradeAccounts.basic.benefit3"),
        t("tradeAccounts.basic.benefit4"),
        t("tradeAccounts.basic.benefit5"),
      ],
    },
    {
      title: t("tradeAccounts.advanced.title"),
      image: StandardLogo,
      tagLine: t("tradeAccounts.advanced.description"),
      benefits: [
        t("tradeAccounts.advanced.benefit1"),
        t("tradeAccounts.advanced.benefit2"),
        t("tradeAccounts.advanced.benefit3"),
        t("tradeAccouts.advanced.benefit4"),
        t("tradeAccounts.advanced.benefit5"),
        t("tradeAccounts.advanced.benefit6"),
      ],
    },
    {
      title: t("tradeAccounts.diamond.title"),
      image: ProfessionalLogo,
      tagLine: t("tradeAccounts.diamond.description"),
      benefits: [
        t("tradeAccounts.diamond.benefit1"),
        t("tradeAccounts.diamond.benefit2"),
        t("tradeAccounts.diamond.benefit3"),
        t("tradeAccounts.diamond.benefit4"),
        t("tradeAccounts.diamond.benefit5"),
        t("tradeAccounts.diamond.benefit6"),
      ],
    },
  ];

  return (
    <div className="accounts">
      <div className="accounts_content">
        <h2 className="text-primary">{t("calendar.section3Title")}</h2>
        <p>{t("calendar.section3Description")}</p>
      </div>

      <div className="accounts_main">
        {AccountsData.map((d, i) => (
          <div
            key={i}
            className={`accounts_box
           ${d.title === "Advanced" ? "accounts_boxStandard" : ""}
           `}
          >
            <div className="accounts_boxHeader">
              <h4>{d.title}</h4>
              <img src={d.image} alt="logo" />
            </div>
            <div className="accounts_boxTagLine">{d.tagLine}</div>
            <ul>
              {d.benefits.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
            <a href="https://client.kwakolmarkets.com/register">
              <Button>{t("common.startTrading")}</Button>
            </a>
          </div>
        ))}
      </div>
      <div className="accounts_btn">
        <a href="/accounts">
          <Button outline color="body">
            {t("common.viewAccounts")}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Accounts;
