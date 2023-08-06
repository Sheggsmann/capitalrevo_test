import React from "react";
import "./Rating.scss";
import RatingStar from "./RatingStar/RatingStar";
import whiteStar from "../../assets/white-star.svg";
import Star from "../../assets/green-star.svg";

const Rating = ({ heading, count, source, color = "" }) => {
  return (
    <div className={`rating ${color === "body" ? "rating_body" : ""} `}>
      <div className="dark-heading mr-1">{heading}</div>
      <div className="rating_stars">
        <RatingStar image={whiteStar} />
        <RatingStar image={whiteStar} />
        <RatingStar image={whiteStar} />
        <RatingStar image={whiteStar} />
        <RatingStar image={whiteStar} />
      </div>
      <div className="rating_review mr-1">
        <span className="dark-heading">{count}</span> reviews on
      </div>
      <div className="rating_source">
        <img src={Star} alt="star" loading="lazy" />
        <div className="dark-heading">{source}</div>
      </div>
    </div>
  );
};

export default Rating;
