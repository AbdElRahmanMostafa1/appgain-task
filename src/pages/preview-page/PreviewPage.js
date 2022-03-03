import React from "react";
import "./preview-page.css";
import { Link } from "react-router-dom";

import AppNav from "../../components/app-nav/AppNav";
import Carousel from "../../components/carousel/Carousel";
import Title from "../../components/title/Title";

const PreviewPage = (props) => {
  console.log(props);
  return (
    <>
      <Link to="/">
        <button className="back-btn btn btn-primary my-1">Back</button>
      </Link>
      <AppNav />
      <Title />
      <Carousel />
    </>
  );
};

export default PreviewPage;
