import React from "react";
import classes from "./AddPhotos.module.css";

const AddPhotos = (props) => {
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
            <input type="file" name="photo" id="photo" required />
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
              <button className={`${classes.btn} ${classes.submit}`} type="submit">
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
