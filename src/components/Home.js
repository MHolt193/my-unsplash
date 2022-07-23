import { useState, useEffect } from "react";
import axios from "axios";

import Masonry from "./Masonry/Masonry";
import NavBar from "./NavBar";
import AddPhotos from "./Modals/AddPhoto";

const Home = () => {
  const [addImageModal, setAddImageModal] = useState(false);
  const [images, setImages] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get("http://192.168.0.57:5000/api/images").then((response) => {
      const data = response.data;
      setImages(data.reverse());
    });
  }, []);

  const imageModalHandler = () => {
    setAddImageModal((prev) => !prev);
  };

  const postToCloudinary = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sqlrsq0h");
    return axios
      .post("https://api.cloudinary.com/v1_1/dgxwzsvhe/image/upload", formData)
      .then((res) => {
        const data = res.data;
        const fileUrl = data["secure_url"];
        return fileUrl;
      });
  };

  const submitPhotoHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.photo.files[0];
    const imageLabel = form.photoLabel.value;
    let imageUrl = "";

    if (imageFile.type.split("/")[0] !== "image") {
      form.photo.labels[0].style.color = "red";
      form.photo.labels[0].innerText = `This file is not a photo! Type Selected:${imageFile.type}. Please press cancel and try again `;
    } else {
      imageUrl = await postToCloudinary(imageFile);

      const formData = {
        label: imageLabel,
        imageUrl: imageUrl,
      };
      axios
        .post("http://192.168.0.57:5000/api/images", formData)
        .then((res) => {
          const data = res.data;
          setImages((prev) => {
            const stateCopy = [...prev];
            return [data, ...stateCopy];
          });
          setAddImageModal(false);
        });
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchResults(() => {
      const searchResult = images.filter((image) => {
        return image.label.match(new RegExp(e.target.value, "gi"));
      });
      return searchResult;
    });
  };

  return (
    <>
      <NavBar
        imageModalHandler={imageModalHandler}
        searchHandler={searchHandler}
      />
      <Masonry images={images} searchResults={searchResults}/>
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
