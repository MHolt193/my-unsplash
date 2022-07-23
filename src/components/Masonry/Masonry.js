import React from "react";
import classes from "./Masonry.module.css";
import Brick from "./Brick";

const Masonry = (props) => {
  return (
    <div className={classes.masonryContainer}>
      {props.searchResults.length > 0
        ? props.searchResults.map((item) => {
            return (
              <Brick
                className={classes.item}
                imageTitle={`${item.label}`}
                imageUrl={item.imageUrl}
                id={item._id}
              />
            );
          })
        : props.images?.map((item) => {
            return (
              <Brick
                className={classes.item}
                imageTitle={`${item.label}`}
                imageUrl={item.imageUrl}
                id={item._id}
              />
            );
          })}
    </div>
  );
};

export default Masonry;
