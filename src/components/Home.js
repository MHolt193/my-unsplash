import { useState, useEffect } from "react";

import Masonry from "./Masonry/Masonry";
import NavBar from "./NavBar";
import AddPhotos from './Modals/AddPhoto'

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.57:5000/api/images")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log(data);
        setImages(data.reverse());
      });
  }, []);

  return (
    <>
    <NavBar />
    <Masonry images={images} />
    <AddPhotos />
    </>
  );
};

export default Home;
