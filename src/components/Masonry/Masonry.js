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
                setImages={props.setImages}
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
                setImages={props.setImages}
              />
            );
          })}
    </div>
  );
};

export default Masonry;
