import React from "react";
import ButtonSmall from "../UI/ButtonSmall";
import reactDom from "react-dom";
import classes from "./AboutUs.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const AboutUsOverlay = (props) => {
  return (
    <div className={classes.aboutusbox}>
      <h1 className={classes.aboutusheader}>About Us</h1>
      <p>
        D-Charity emerged in the late nineteenth century to address urban
        poverty. The organization developed as a to help the needi and a
        reaction the proliferation of charities practicing indiscriminate
        almsgiving without investigating the circumstances of recipients.
        Inspired by a similar movements, the organization held three basic
        assumptions: that urban poverty was caused bincome inquality and wealth
        imbalacne, that poverty could be eliminated by the correction of these
        deficiencies in individuals, and that various charity organizations
        needed to cooperate to bring about this change. The first charity
        organization were established in the late 1890s, and by the 1919s after
        WWI more than one hundred cities had COS agencies. Journals like and
        Charities Review created a forum for ideas, while annual meetings of the
        National Conference of Charities and Corrections provided opportunities
        for leaders to discuss common concerns. we are humbled by the
        contributions of all our members no matter what they are , and we
        encourage to be a voice to the poor and the misfortunate.
      </p>

      <div className={classes.aboutusbutton}>
        <ButtonSmall onClick={props.onHide}>Close</ButtonSmall>
      </div>
    </div>
  );
};

const AboutUs = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onHide={props.onHide} />,
        document.getElementById("backdrop")
      )}
      {reactDom.createPortal(
        <AboutUsOverlay onHide={props.onHide} />,
        document.getElementById("About-us")
      )}
    </>
  );
};

export default AboutUs;
