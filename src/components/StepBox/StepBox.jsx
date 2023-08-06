import React from "react";
import "./StepBox.scss";

const StepBox = ({ number, image, name, details }) => {
  return (
    <div className="stepBox">
      {number && <span>{number}</span>}
      <img src={image} alt="logo" loading="lazy" />
      {name && <h4>{name}</h4>}
      <p>{details}</p>
    </div>
  );
};

export default StepBox;
