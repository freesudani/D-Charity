import React from "react";
import classes from "./OurWork.module.css";
import ButtonMedium from "../UI/ButtonMedium";

const OurWork = () => {
  return (
    <div className={classes.ourwork}>
      <div className={classes.description}>
        <h2>
          D-Charity connects donors, and nonprofit organizations all over the
          world . We assist fellow nonprofits to get access to the fundings,
          donations, and support they need to serve their communities and people
          in need.
        </h2>
        <ButtonMedium>About Us</ButtonMedium>
      </div>
      <div className={classes.statistics}>
        <div className={classes.statistic}>
          <div className={classes.figure}>19</div>
          <div className={classes.unit}>Years</div>
        </div>
        <div className={classes.statistic}>
          <div className={classes.figure}>$511M</div>
          <div className={classes.unit}>Dollars</div>
        </div>
        <div className={classes.statistic}>
          <div className={classes.figure}>1,252,127</div>
          <div className={classes.unit}>Donors</div>
        </div>
        <div className={classes.statistic}>
          <div className={classes.figure}>3,425</div>
          <div className={classes.unit}>Projects</div>
        </div>
        <div className={classes.statistic}>
          <div className={classes.figure}>109</div>
          <div className={classes.unit}>Countries</div>
        </div>
        <div className={classes.statistic}>
          <div className={classes.figure}>51</div>
          <div className={classes.unit}>Organizations</div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
