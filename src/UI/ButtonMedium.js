import React from "react";
import classes from "./ButtonMedium.module.css";

const ButtonMedium = (props) => {
  return <button className={classes.btnmedium}>{props.children}</button>;
};

export default ButtonMedium;
