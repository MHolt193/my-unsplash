import React from "react";
import classes from "./AddPhotos.module.css";

const AddPhotos = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <h1>Add a new photo</h1>
        <label className={classes.label}>
          Label
          <input type="text" name="photoLabel" id="photoLabel" />
        </label>
        <div className={classes.dropContainer}>
          <label
            className={`${classes.label} ${classes.upload}`}
            htmlFor="photo"
          >
            Drag and drop photo here{" "}
            <input type="file" name="photo" id="photo" />
          </label>
          <div className={classes.buttonsContainer}>
            <label htmlFor="photo" className={classes.selectBtn}>
              Select photo
            </label>
            <div className={classes.optionsBtnContainer}>
              <button className={`${classes.btn} ${classes.cancel}`}>
                Cancel
              </button>
              <button className={`${classes.btn} ${classes.submit}`}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
