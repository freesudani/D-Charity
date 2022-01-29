import React from "react";
import classes from "./Donate.module.css";
import ButtonMedium from "../UI/ButtonMedium";
import DonateIcon from "../UI/DonateIcon";

const Donate = () => {
  return (
    <div className={classes.donate} id="donate">
      <div className={classes.form}>
        <form>
          <div className={classes.data}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Full Name" />
          </div>
          <div className={classes.data}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" type="email" placeholder="E-mail" />
          </div>
          <div className={classes.data}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone Number" />
          </div>
          <div className={classes.datasmall}>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" placeholder="$" />
          </div>
          <ButtonMedium>Submit</ButtonMedium>
        </form>
      </div>
      <div className={classes.donateicon}>
        <DonateIcon />
      </div>
    </div>
  );
};

export default Donate;
