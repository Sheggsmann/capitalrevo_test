import React from "react";
import "./TextInput.scss";

const TextInput = ({ label, type = "text", color = "", ...rest }) => {
  return (
    <div className={`textInput ${color === "grey" ? "textInput_grey" : ""}`}>
      <label>{label}</label>
      <input type={type} {...rest} />
    </div>
  );
};

export default TextInput;
