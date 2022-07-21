import React, { useState, useEffect } from "react";
import classes from "./Masonry.module.css";
import Brick from "./Brick";

const Masonry = (props) => {
  const [apiResponse, setApiResponse] = useState([]);
  let imageUrl =
    "https://longwoodgardens.org/sites/default/files/highlight_images/137439.jpg";
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log(data.data);
        setApiResponse(data.data);
      });
  }, []);
  return (
    <div className={classes.masonryContainer}>
      {apiResponse?.map((item) => {
        return (
          <Brick
            className={classes.item}
            imageTitle={`${item.Year}: ${item.Population}`}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Masonry;
