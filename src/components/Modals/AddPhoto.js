import React from "react";
import classes from "./AddPhotos.module.css";

const AddPhotos = (props) => {
  
  
    const inputChangeHandler = (e) => {
    if (e.target.files[0].type.split("/")[0] === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
      }
      reader.onload = () => {
        e.target.parentElement.style.background = `url(${reader.result})`;
        e.target.parentElement.style.backgroundSize = "contain";
        e.target.parentElement.style.backgroundRepeat = "no-repeat";
        e.target.parentElement.style.backgroundPosition = "center";
        e.target.parentElement.style.color = "transparent";
      };
      console.log(e.target.parentElement.style);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.modal} onSubmit={props.submitPhotoHandler}>
        <h1>Add a new photo</h1>
        <label className={classes.label}>
          Label
          <input type="text" name="photoLabel" id="photoLabel" required />
        </label>
        <div className={classes.dropContainer}>
          <label
            className={`${classes.label} ${classes.upload}`}
            htmlFor="photo"
          >
            Drag and drop photo here{" "}
            <input
              type="file"
              name="photo"
              id="photo"
              required
              onChange={inputChangeHandler}
            />
          </label>
          <div className={classes.buttonsContainer}>
            <label htmlFor="photo" className={classes.selectBtn}>
              Select photo
            </label>
            <div className={classes.optionsBtnContainer}>
              <button
                className={`${classes.btn} ${classes.cancel}`}
                onClick={props.imageModalHandler}
                type="button"
              >
                Cancel
              </button>
              <button
                className={`${classes.btn} ${classes.submit}`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPhotos;
