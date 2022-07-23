import React, { useState, useRef } from "react";
import axios from "axios";

const Brick = (props) => {
  const { id, className, imageTitle, imageUrl, setImages } = props;
  const [showDelete, setShowDelete] = useState(false);

  const imageContainer = useRef();
  const deletePhotoHandler = async () => {
    axios
      .delete(
        `http://192.168.0.57:5000/api/images/${imageContainer.current.id}`
      )
      .then((response) => {
        console.log(response.data);
        setImages((prev) => {
          const stateCopy = [...prev];
          const newState = stateCopy.filter((image) => {
            return image._id !== imageContainer.current.id;
          });
          console.log(newState);
          return newState;
        });
      })
      .catch((error) => {
        console.log(error.response);
        setImages((prev) => {
          const stateCopy = [...prev];
          const newState = stateCopy.filter((image) => {
            return image._id !== imageContainer.current.id;
          });
          console.log(newState);
          return newState;
        });
      });
  };

  return (
    <div
      id={id}
      ref={imageContainer}
      className={className}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
      onMouseEnter={() => {
        setShowDelete(true);
      }}
    >
      <img src={imageUrl} alt={imageTitle} />
      <button
        type="button"
        onClick={deletePhotoHandler}
        style={{ display: showDelete ? "block" : "none" }}
      >
        Delete
      </button>
      <p style={{ display: showDelete ? "block" : "none" }}>{imageTitle}</p>
    </div>
  );
};

export default Brick;
