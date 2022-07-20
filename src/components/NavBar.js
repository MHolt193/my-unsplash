import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.infoContainer}>
        <div>
          <img src="" alt="" /> <p>My unsplash</p>
        </div>
        <form>
          <input type="text" placeholder="Search By Title" className={classes.search}/>
        </form>
      </div>
      <button type="button" className={classes.btn}>Add a photo</button>
    </nav>
  );
};

export default NavBar;
