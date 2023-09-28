import React from "react";
import "./CurrencyIndicator.scss";
import EuropeFlag from "../../assets/europe-flag.svg";
import ArrowUp from "../../assets/arrow-up.svg";

const CurrencyIndicator = ({ value, percentage, onClick }) => {
  return (
    <div className="currencyIndicator" onClick={onClick}>
      <img src={EuropeFlag} alt="flag" />
      <div className="currencyIndicator_main">
        <h4>EURGBP</h4>
        <div>
          {value} <img src={ArrowUp} alt="up" /> · {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CurrencyIndicator;
