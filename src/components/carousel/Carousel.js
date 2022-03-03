import React, { useState } from "react";
import { Link } from "react-router-dom";
import PreviewBtn from "../UI/preview-btn/PreviewBtn";
import "./carousel.css";
// import data from "./test";

const Carousel = () => {
  // const [image, setImage] = useState();
  // const [allImages, setAllImages] = useState([]);

  // const fileChangeHandler = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // const uploadImage = () => {
  //   setAllImages((prevState) => [...prevState, image]);
  // };

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {!window.location.href.includes("previewpage") && (
          <Link to="/previewpage">
            <PreviewBtn>Preview</PreviewBtn>
          </Link>
        )}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="carousel-img d-block"
              alt="1"
            />
            {/* {data.map((img) => {
            return (
              <img src={img.img} alt="" className="carousel-img d-block" />
            );
          })} */}
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="carousel-img d-block"
              alt="2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <input type="file" onChange={fileChangeHandler} />
      <button onClick={uploadImage}> upload Image </button> */}
    </>
  );
};

export default Carousel;
