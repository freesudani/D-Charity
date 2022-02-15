import React from "react";
import classes from "./ButtonMedium.module.css";

const ButtonMedium = (props) => {
  return (
    <button className={classes.btnmedium} onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
};

export default ButtonMedium;
