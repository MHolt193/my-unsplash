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
            type="search"
            id="search"
            placeholder="Search by name"
            className={classes.search}
            onChange={props.searchHandler}
          />
        </form>
      </div>
      <button
        type="button"
        className={classes.btn}
        onClick={props.imageModalHandler}
      >
        Add a photo
      </button>
    </nav>
  );
};

export default NavBar;
