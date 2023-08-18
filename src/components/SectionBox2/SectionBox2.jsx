import React from "react";
import Button from "../Button";
import "./SectionBox2.scss";

const SectionBox2 = ({
  heading,
  text,
  bgImage,
  tabs = false,
  btn = false,
  btnText,
}) => {
  return (
    <div className="sectionBox2">
      <img src={bgImage} alt="section_img" />
      <div className="sectionBox2_Content">
        <h3>{heading}</h3>
        <p>{text}</p>
        {tabs && (
          <div className="sectionBox2_Options">
            <div>Easy withdrawals</div>
            <div>Flexible Deposit Options</div>
            <div>24/7 customer support</div>
            <div>Account manager</div>
          </div>
        )}
        {btn && (
          <a href="https://client.kwakolmarkets.com/register">
            <Button>{btnText}</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionBox2;
