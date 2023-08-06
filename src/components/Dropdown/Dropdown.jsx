import React from "react";
import "./Dropdown.scss";
import DownArrow from "../../assets/down-arrow.svg";

const Dropdown = ({ label, options = [], ...rest }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select {...rest}>
        {options.map((d, i) => (
          <option value={d} key={i}>
            {d}
          </option>
        ))}
      </select>
      <img src={DownArrow} alt="arrow" />
    </div>
  );
};

export default Dropdown;
