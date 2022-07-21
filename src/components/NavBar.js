import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.infoContainer}>
        <div className={classes.logoContainer}>
          <div className={classes.iconContainer}>
            <div className={classes.rectangleSm}></div>
            <div className={classes.rectangleLg}></div>
          </div>{" "}
          <div className={classes.titleContainer}>
            <p className={classes.title}>My unsplash</p>
          <p className={classes.subtitle}>devchallenges.io</p>
          </div>
          
        </div>
        <form>
          <input
            type="text"
            placeholder="Search By Title"
            className={classes.search}
          />
        </form>
      </div>
      <button type="button" className={classes.btn}>
        Add a photo
      </button>
    </nav>
  );
};

export default NavBar;
