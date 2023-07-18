import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
