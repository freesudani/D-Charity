import React, { useState } from "react";
import ButtonSmall from "../UI/ButtonSmall";
import { MenuItems } from "../data/MenuItems";
import Logo from "../assets/image/454ce6367e2a405c96c5c0158a8b7f48.png";
import classes from "./Navbar.module.css";

import { Link } from "react-scroll";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={classes.navbarItems}>
      <img className={classes.navbarLogo} src={Logo} alt="logo" />
      <div className={classes.menuIcon} onClick={handleClick}>
        <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          style={{ color: "#fff" }}
        ></i>
      </div>
      <ul
        className={clicked ? `${classes.navemenuactive}` : `${classes.navmenu}`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                className={classes.navLinks}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ButtonSmall
        onClick={() => {
          setShowForm(true);
        }}
      >
        Sign Up
      </ButtonSmall>
    </nav>
  );
};

export default Navbar;
