import React, { useState } from "react";
import reactDom from "react-dom";
import classes from "./SignUpForm.module.css";
import ButtonSmall from "../UI/ButtonSmall";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const SignupOverlay = (props) => {
  return (
    <div className={classes.loginBox}>
      <h1>{props.loggedIn ? "Sign In" : "Sign Up"}</h1>
      <form onSubmit={props.singUp}>
        <input name="email" placeholder="email" ref={props.emailRef} />
        <input name="password" placeholder="password" ref={props.passwordRef} />

        <div className={classes.signUpSubmit}>
          <ButtonSmall onClick={props.onHide}>
            {props.loggedIn ? "Log In" : "Submit"}
          </ButtonSmall>
        </div>
      </form>
      <p>
        {props.loggedIn ? "Please Sign In" : "Aleady have an account?"} <br />
        {!props.loggedIn ? (
          <a onClick={() => props.setLoggedIn(true)}>Log in here</a>
        ) : (
          <a onClick={() => props.setLoggedIn(false)}>Sign-Up here</a>
        )}
      </p>
    </div>
  );
};

const SignUpForm = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registrationHandler = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginHandler = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutHandler = async () => {
    await signOut(auth);
  };

  return (
    <>
      {reactDom.createPortal(
        <Backdrop onHide={props.onHide} />,
        document.getElementById("backdrop")
      )}
      {reactDom.createPortal(
        <SignupOverlay onHide={props.onHide} />,
        document.getElementById("sign-up")
      )}
    </>
  );
};

export default SignUpForm;
