import React from "react";
import classes from "./ButtonSmall.module.css";

const ButtonSmall = (props) => {
  return <button className={classes.btnsmall}>{props.children}</button>;
};

export default ButtonSmall;
