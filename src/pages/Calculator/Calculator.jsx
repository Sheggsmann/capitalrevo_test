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

const StartSteps = [
  {
    image: JoinLogo,
    name: "Register",
    details: "Register and and activate your account",
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

const Calculator = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="calculator">
      <Hero
        heading="Forex Trading Calculator"
        text="The tool shows how much money will be immediately engaged in the order with your chosen parameters."
      />
      <div className="calculator_main">
        <div className="calculator_bg1" />
        <div className="calculator_lines" />

        <div className="calculator_currencies">
          {CurrencyData.map((d, i) => (
            <CurrencyIndicator
              key={i}
              value={d.value}
              percentage={d.percentage}
            />
          ))}
        </div>

        <p className="body-large">
          Set the symbol and adjust the leverage and volume to calculate the
          required margin, pip value, and fees that you are comfortable with.
        </p>
        <form onSubmit={handleSubmit} className="calculator_form">
          <div>
            <Dropdown
              label="Required margin"
              options={["EURUSD", "USD", "EUR"]}
            />
            <Dropdown label="Leverage" options={["1:20", "1:30", "1:40"]} />
            <ValueInput label="Required margin" />
            <TextInput label="Account currency" color="grey" />
            <Button type="submit">Calculate</Button>
          </div>
          <div>
            <TextInput label="Required margin" />
            <TextInput label="Pip value" />
            <TextInput label="Trading fees" />
            <Button type="submit">Calculate</Button>
          </div>
        </form>
        <div className="calculator_startSteps">
          <h2>Start trading in less than 5 minutes</h2>
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
              <Button>Start trading</Button>
            </a>
            <p className="body-large">or try Demo Account</p>
          </div>
        </div>
      </div>
      <Footer dark />
    </div>
  );
};

export default Calculator;
