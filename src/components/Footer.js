import React, { useState } from "react";
import classes from "./Footer.module.css";
import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";
import { IconContext } from "react-icons";
import CareerOpportunities from "./CareerOpportunities";
import SignUpForm from "./SignUpForm";

const Footer = () => {
  const [showCareers, setShowCareers] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const displayCareersHandler = () => {
    setShowCareers(true);
  };

  const hideCareersHandler = () => {
    setShowCareers(false);
  };

  const displaySignUpHandler = () => {
    setShowSignUp(true);
  };

  const hideSignUpHandler = () => {
    setShowSignUp(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
      <div className={classes.footer} id="contactus">
        <h1 className={classes.header}>D-Charity Institution</h1>
        <div className={classes.sections}>
          <div className={classes.intouch}>
            <h3>Get in Touch</h3>

            <p>Customer services: +(66) 0300 3621 </p>
            <p>Phone lines open Mon - Fri 9am-5pm</p>
            <p>For Legal inquiries : +(66) 0301 5144</p>
            <p>Phone lines open Mon - Fri 9am - 5pm</p>
          </div>
          <div className={classes.career}>
            <h3>Work With us</h3>
            <div>
              <a onClick={displayCareersHandler}>Career opportunities</a>
            </div>
            <div>
              <a>Volunteer Opportunities</a>
            </div>
          </div>
          <div className={classes.account}>
            <h3>Your Account</h3>
            <div>
              <a onClick={displaySignUpHandler}>Sign in/register</a>
            </div>
            <div>
              <a>Get our email newsletter</a>
            </div>
            <div>
              <a>Online community/Forum</a>
            </div>
          </div>
          <div className={classes.policies}>
            <h3>Rules and Regulations</h3>
            <div>
              <a>Terms & conditions</a>
            </div>
            <div>
              <a>All policies</a>
            </div>
            <div>
              <a>Manage cookies</a>
            </div>
          </div>
          <div className={classes.socialmedia}>
            <h3>Follow Us</h3>
            <div style={{ display: "flex" }}>
              <a className={classes.footericons}>
                <SiFacebook />
              </a>
              <a className={classes.footericons}>
                <SiTwitter />
              </a>
              <a className={classes.footericons}>
                <SiInstagram />
              </a>
              <a className={classes.footericons}>
                <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showCareers && (
        <CareerOpportunities
          onHide={hideCareersHandler}
          onShow={displayCareersHandler}
        />
      )}
      {showSignUp && <SignUpForm onHide={hideSignUpHandler} />}
    </IconContext.Provider>
  );
};

export default Footer;
