import React from "react";
import "./InvestmentBox.scss";
import CoinsInHandsImage from "../../assets/CoinsInHands.svg";
import Button from "../Button";

const InvestmentBox = ({
  heading,
  text,
  buttonText = "Start trading",
  redirectLink = "https://client.kwakolmarkets.com/register",
}) => {
  return (
    <div className="investmentBox">
      <div className="investmentBox_content">
        <h3>{heading}</h3>
        <p className="body-large">{text}</p>
        <a href={redirectLink}>
          <Button>{buttonText}</Button>
        </a>
      </div>
      <img src={CoinsInHandsImage} alt="invest" />
    </div>
  );
};

export default InvestmentBox;
