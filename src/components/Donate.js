import React, { useRef } from "react";
import classes from "./Donate.module.css";
import ButtonMedium from "../UI/ButtonMedium";
import DonateIcon from "../UI/DonateIcon";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const Donate = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const amountInputRef = useRef();

  const donateSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enetredAmount = amountInputRef.current.value;

    // optional: Add validation

    try {
      const docRef = await addDoc(collection(db, "donations"), {
        Name: enteredName,
        Email: enteredEmail,
        Phune: enteredPhone,
        Amount: enetredAmount,
      });
      alert(`Donation with ID: ${docRef.id} has been submitted`);
    } catch (e) {
      alert(`Error adding donation: ${e}`);
    }
  };

  return (
    <div className={classes.donate} id="donate">
      <div className={classes.form}>
        <form onSubmit={donateSubmitHandler}>
          <div className={classes.data}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              ref={nameInputRef}
            />
          </div>
          <div className={classes.data}>
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              ref={emailInputRef}
            />
          </div>
          <div className={classes.data}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              ref={phoneInputRef}
            />
          </div>
          <div className={classes.datasmall}>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="$"
              ref={amountInputRef}
            />
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
