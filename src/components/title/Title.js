import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const titleState = useSelector((s) => s);
  console.log(titleState);
  return (
    <h1
      style={{
        color: titleState.titleColor,
        backgroundColor: titleState.titleBg,
      }}
      className="title-header text-center text-uppercase"
    >
      {titleState.titleText}
    </h1>
  );
};

export default Title;
