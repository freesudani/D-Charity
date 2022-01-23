import React from "react";
import classes from "./SignUpForm.module.ccs";
import ButtonMedium from "../UI/ButtonMedium";

const SignUpForm = () => {
  return (
    <div className={classes.loginBox}>
      <h1>Sign Up</h1>
      <form>
        <input name="username" placeholder="user name" />
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="password" placeholder="Confirm password" />
        <ButtonMedium className={classes.signUpSubmit}>Submit</ButtonMedium>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
