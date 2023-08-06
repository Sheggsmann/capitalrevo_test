import React from "react";
import "./ContentBox.scss";

const ContentBox = ({ heading, text, logo, transparent = false }) => {
  return (
    <div
      className={`contentBox ${transparent ? "contentBox_transparent" : ""}`}
    >
      <img src={logo} alt="logo" />
      <h3>{heading}</h3>
      <p className="body-large">{text}</p>
    </div>
  );
};

export default ContentBox;
