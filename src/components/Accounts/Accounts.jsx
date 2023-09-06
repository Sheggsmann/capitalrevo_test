import React from "react";
import "./Accounts.scss";
import Button from "../Button";
import BeginnerLogo from "../../assets/beginner-logo.svg";
import StandardLogo from "../../assets/standard.svg";
import ProfessionalLogo from "../../assets/professional.svg";

const AccountsData = [
  {
    title: "Basic",
    image: BeginnerLogo,
    tagLine:
      "For beginners who want to trade Forex at fixed spreads with guaranteed stop loss",
    benefits: [
      "Leverage up to 1:100",
      "Spread from 3 pips",
      "Free account manager session",
      "Customer support 24/7",
      "Minimum Deposit $250",
    ],
  },
  {
    title: "Advanced",
    image: StandardLogo,
    tagLine: "For more experienced traders who need a professional advantage",
    benefits: [
      "Leverage up to 1:200",
      "Spread from 2.25 pips",
      "Senior account manager",
      "Quaterly portfolio evaluation",
      "Customer support 24/7",
      "Minimum deposit $10,000",
    ],
  },
  {
    title: "Diamond",
    image: ProfessionalLogo,
    tagLine: "For big players who require a more personalized approach",
    benefits: [
      "Leverage up to 1:500",
      "Spread from 0.9 pips",
      "Senior account manager",
      "Daily portfolio evaluation",
      "Customer support 24/7",
      "Minimum Deposit $250,000",
    ],
  },
];

const Accounts = () => {
  return (
    <div className="accounts">
      <div className="accounts_content">
        <h2 className="text-primary">Accounts For Every Trader</h2>
        <p>
          We have accounts for both new and more active traders. Check which
          fits and you’re set to go.
        </p>
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
              <Button>Start Trading</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
