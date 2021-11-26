import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://desolate-plateau-96499.herokuapp.com/carousel")
      .then((result) => setImages(result.data));
  }, []);
  return (
    <div>
      <Carousel className="banner" fade>
        {images.map((image) => (
          <Carousel.Item key={image._id}>
            <img className="d-block  w-100" src={image.img} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-warning">Adventure, Your Way</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
