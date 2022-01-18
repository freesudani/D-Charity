import React from "react";
import classes from "./Guides.module.css";
import {
  FcDonate,
  FcPositiveDynamic,
  FcCustomerSupport,
  FcCollaboration,
  FcDoughnutChart,
} from "react-icons/fc";
import { IconContext } from "react-icons";

const Guides = () => {
  return (
    <IconContext.Provider value={{ size: "4rem" }}>
      <div className={classes.section}>
        <div className={classes.guides1}>
          <div className={classes.guide}>
            <div className={classes.icon}>
              <FcDonate />
            </div>
            <div className={classes.title}>
              <h2>Starting A Charity</h2>
            </div>
            <ul className={classes.details}>
              <li>register a charity</li>
              <li>Who can apply to be registered?</li>
              <li>Test your eligibality</li>
              <li>Places to Apply</li>
              <li>Time and Dates to Apply</li>
            </ul>
          </div>
          <div className={classes.guide}>
            <div className={classes.icon}>
              <FcPositiveDynamic />
            </div>
            <div className={classes.title}>
              <h2>Managing Your Charity</h2>
            </div>
            <ul className={classes.details}>
              <li>Duties and responsibilities of the governing board</li>
              <li>Annual submissions</li>
              <li>Applying for IPC status</li>
              <li>Grant and support for charities and IPCs</li>
            </ul>
          </div>
          <div className={classes.guide}>
            <div className={classes.icon}>
              <FcCustomerSupport />
            </div>
            <div className={classes.title}>
              <h2>Fund-Raising</h2>
            </div>
            <ul className={classes.details}>
              <li>Duties and responsibilities of the fund-raisers</li>
              <li>Fund-raising permits or licences</li>
              <li>
                Code of Practice for online charitable fund-raising appeals
              </li>
              <li>Code for commercial fund-raisers</li>
            </ul>
          </div>
        </div>
        <div className={classes.guides2}>
          <div className={classes.guide}>
            <div className={classes.icon}>
              <FcCollaboration />
            </div>
            <div className={classes.title}>
              <h2>Public</h2>
            </div>
            <ul className={classes.details}>
              <li>Newsroom</li>
              <li>Notices and orders of the COC</li>
              <li>Report a concern</li>
              <li>Safer-giving</li>
            </ul>
          </div>
          <div className={classes.guide}>
            <div className={classes.icon}>
              <FcDoughnutChart />
            </div>
            <div className={classes.title}>
              <h2>Resources</h2>
            </div>
            <ul className={classes.details}>
              <li>Events and speeches</li>
              <li>Publications</li>
              <li>Guides and templates</li>
              <li>Useful links</li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Guides;
