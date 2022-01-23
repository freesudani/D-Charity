import React from "react";
import classes from "./Donate.module.css";
import ButtonSmall from "../UI/ButtonSmall";
import DonateIcon from "../UI/DonateIcon";

const Donate = () => {
  return (
    <div className={classes.donate} id="donate">
      <div className={classes.form}>
        <form>
          <div className={classes.data}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className={classes.data}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" type="email" />
          </div>
          <div className={classes.data}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" />
          </div>
          <div className={classes.datasmall}>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" />
          </div>
          <ButtonSmall>Submit</ButtonSmall>
        </form>
      </div>
      <div className={classes.donateicon}>
        <DonateIcon />
      </div>
    </div>
  );
};

export default Donate;
