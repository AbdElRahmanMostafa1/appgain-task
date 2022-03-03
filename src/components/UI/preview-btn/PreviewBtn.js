import React from "react";
import './preview-btn.css'

const PreviewBtn = ({ className, children }) => {
  const previewBtnClasses = "preview-btn " + className;
  return <button className={previewBtnClasses}> {children} </button>;
};

export default PreviewBtn;
