import React, { useState } from "react";
import "./ValueInput.scss";
import DownArrow from "../../assets/down-arrow.svg";
import UpArrow from "../../assets/up-arrow.svg";

const ValueInput = ({ label, difference = 1, ...rest }) => {
  const [value, setValue] = useState(1);

  return (
    <div className="valueInput">
      <label>{label}</label>
      <input
        value={value ? Number(value).toFixed(2) : value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
        {...rest}
        step="1"
        disabled
      />
      <img
        onClick={() => setValue(value + difference)}
        src={UpArrow}
        className="valueInput_upArrow"
        alt="up-arrow"
      />
      <img
        onClick={() => setValue(value - difference)}
        src={DownArrow}
        className="valueInput_downArrow"
        alt="up-arrow"
      />
    </div>
  );
};

export default ValueInput;
