import React from "react";
import classes from "./Subscribe.module.css";
import Logo from "../assets/image/454ce6367e2a405c96c5c0158a8b7f48.png";
import ButtonMedium from "../UI/ButtonMedium";

const Subscribe = () => {
  return (
    <div className={classes.section}>
      <div className={classes.text}>
        <h1>SUBSCRIBE</h1>
        <h3>To Our Newsletter and Service Updates.</h3>
        <h5>
          Sign up to receive D-Charity, the most leading weekly nonprofit and
          charitable newsletter with a roundup of sector news, as well as
          receive alerts for future D-charity sessions and service updates.
        </h5>
        <ButtonMedium>Sign Up Today</ButtonMedium>
      </div>
      <div className={classes.icon}>
        <img src={Logo} alt="logo" className={classes.image} />
      </div>
    </div>
  );
};

export default Subscribe;
