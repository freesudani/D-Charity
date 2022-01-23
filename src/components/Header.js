import React from "react";
import HeaderImage from "../assets/image/pexels-branimir-balogović-3959485 (1).jpg";
import classes from "./Header.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <FaQuoteLeft className={classes.quote1} />
          <h1 className={classes.text1}>We can't help everyone</h1>
          <h1 className={classes.text2}>everyone</h1>
          <h1 className={classes.text3}>but</h1>
          <h1 className={classes.text4}>everyone</h1>
          <h1 className={classes.text5}>can help someone</h1>

          <p className={classes.text6}>Ronald Reagan</p>
        </div>
        <div className={classes.headerImage}>
          <img src={HeaderImage} alt="charity" className={classes.image} />
        </div>
      </div>
      <div class={classes.wave}></div>
    </div>
  );
};

export default Header;
