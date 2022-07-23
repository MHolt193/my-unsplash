import { useState, useEffect } from "react";

import Masonry from "./Masonry/Masonry";
import NavBar from "./NavBar";
import AddPhotos from "./Modals/AddPhoto";

const Home = () => {
  const [addImageModal, setAddImageModal] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.57:5000/api/images")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setImages(data.reverse());
      });
  }, []);

  const imageModalHandler = () => {
    setAddImageModal((prev) => !prev);
  };

  const submitPhotoHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.photo.files;
    console.log(imageFile);

    if (imageFile[0].type.split("/")[0] !== "image") {
      console.log("error");
      form.photo.labels[0].style.color = "red";
      form.photo.labels[0].innerText = `This file is not a photo! Type Selected:${imageFile[0].type}. Please press cancel and try again `;
    } else {
      console.log("success");
    }
  };

  return (
    <>
      <NavBar imageModalHandler={imageModalHandler} />
      <Masonry images={images} />
      {addImageModal && (
        <AddPhotos
          imageModalHandler={imageModalHandler}
          submitPhotoHandler={submitPhotoHandler}
        />
      )}
    </>
  );
};

export default Home;
