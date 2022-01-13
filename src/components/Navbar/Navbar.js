import React, { useState } from "react";
import { MenuItems } from "../data/MenuItems";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={classes.navbarItems}>
      <h1 className={classes.navbarLogo}>React</h1>
      <div className={classes.menuIcon} onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.path}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
