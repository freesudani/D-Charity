import React from "react";
import reactDom from "react-dom";
import classes from "./SignUpForm.module.css";
import ButtonSmall from "../UI/ButtonSmall";

const Backdrop = (prop) => {
  return <div className={classes.backdrop}></div>;
};

const SignupOverlay = (props) => {
  return (
    <div className={classes.loginBox}>
      <h1>Sign Up</h1>
      <form>
        <input name="username" placeholder="user name" />
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="password" placeholder="Confirm password" />
        <ButtonSmall className={classes.signUpSubmit} onClick={props.onShow}>
          Submit
        </ButtonSmall>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

const SignUpForm = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {reactDom.createPortal(
        <SignupOverlay onShow={props.onShow} />,
        document.getElementById("sign-up")
      )}
    </>
  );
};

export default SignUpForm;
