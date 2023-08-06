import React, { forwardRef } from "react";
import "./Button.scss";

const Button = forwardRef(
  ({ children, outline = false, color = "", ...rest }, ref) => {
    return (
      <button
        className={`button 
   ${outline ? "button_outline" : ""} 
   ${color === "body" ? "button_body" : ""}
   `}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
