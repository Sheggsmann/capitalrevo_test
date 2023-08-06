import React from "react";
import "./EarthBox.scss";
import Button from "../Button";

const EarthBox = ({ heading, text, btn = false, tabs = false }) => {
  return (
    <div className="earthBox">
      <div className="earthBox_Content">
        <h3>{heading}</h3>
        <p>{text}</p>
        {tabs && (
          <div className="earthBox_Options">
            <div>Easy withdrawals</div>
            <div>Flexible Deposit Options</div>
            <div>24/7 customer support</div>
            <div>Account manager</div>
          </div>
        )}
        {btn && (
          <a href="https://client.kwakolmarkets.com/register">
            <Button>Make a deposit</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EarthBox;
