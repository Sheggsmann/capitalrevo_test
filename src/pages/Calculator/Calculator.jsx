import React from "react";
import "./Calculator.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import CurrencyIndicator from "../../components/CurrencyIndicator";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import ValueInput from "../../components/ValueInput";
import Button from "../../components/Button";
import JoinLogo from "../../assets/join.svg";
import Step2Logo from "../../assets/step-2-1.svg";
import DepositLogo from "../../assets/deposit.svg";
import StepBox from "../../components/StepBox";
import CalculatorBg from "../../assets/calculator_bg.png";
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

const Calculator = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const StartSteps = [
    {
      image: JoinLogo,
      name: t("tradingCalculator.card1.title"),
      details: t("tradingCalculator.card1.description"),
    },
    {
      image: Step2Logo,
      name: t("tradingCalculator.card2.title"),
      details: t("tradingCalculator.card2.description"),
    },
    {
      image: DepositLogo,
      name: t("tradingCalculator.card3.title"),
      details: t("tradingCalculator.card3.description"),
    },
  ];

  return (
    <div className="calculator">
      <Hero
        bgImage={CalculatorBg}
        heading={t("tradingCalculator.title")}
        text={t("tradingCalculator.titleDescription")}
      />
      <div className="calculator_main">
        <div className="calculator_bg1" />
        {/* <div className="calculator_lines" /> */}
        <img src={Lines} alt="line calculator" className="calculatorLines" />

        <div className="calculator_currencies">
          {CurrencyData.map((d, i) => (
            <CurrencyIndicator
              key={i}
              value={d.value}
              percentage={d.percentage}
            />
          ))}
        </div>

        <p className="body-large">{t("tradingCalculator.calculatorText")}</p>
        <form onSubmit={handleSubmit} className="calculator_form">
          <div>
            <Dropdown
              label="Required margin"
              options={["EURUSD", "USD", "EUR"]}
            />
            <Dropdown label="Leverage" options={["1:20", "1:30", "1:40"]} />
            <ValueInput label="Required margin" />
            <TextInput label="Account currency" color="grey" />
            <Button type="submit">{t("tradingCalculator.calculate")}</Button>
          </div>
          <div>
            <TextInput label="Required margin" />
            <TextInput label="Pip value" />
            <TextInput label="Trading fees" />
            <Button type="submit">{t("tradingCalculator.calculate")}</Button>
          </div>
        </form>
        <div className="calculator_startSteps">
          <h2>{t("tradingCalculator.section1Title")}</h2>
          <div className="calculator_startStepsMain">
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
          <div className="calculator_startStepsButton">
            <a href="https://client.kwakolmarkets.com/register">
              <Button>{t("common.startTrading")}</Button>
            </a>
            {/* <p className="body-large">or try Demo Account</p> */}
          </div>
        </div>
      </div>
      <Footer dark />
    </div>
  );
};

export default Calculator;
