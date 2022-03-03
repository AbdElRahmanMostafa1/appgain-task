import React, { useState, useRef } from "react";
import "./add-cta-btn.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCTABtn = () => {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidURL, setIsValidURL] = useState(true);
  const [isNewTab, setIsNewTab] = useState(false);
  const btnNameRef = useRef("");
  const btnLinkURL = useRef("");
  const btnColor = useRef("");
  const btnBg = useRef("");

  const dispatch = useDispatch();

  const newTabHandler = (e) => {
    setIsNewTab(!isNewTab);
  };

  const ctaBtnHandler = (e) => {
    e.preventDefault();
    const name = btnNameRef.current.value;
    const url = btnLinkURL.current.value;
    if (name.trim().length === 0) {
      setIsValidName(false);
      toast.warn("Button Name is required");
    } else if (url.trim().length === 0) {
      setIsValidURL(false);
    } else {
      const ctaBtnData = {
        btnName: name,
        btnLinkURL: url,
        btnColor: btnColor.current.value,
        btnBg: btnBg.current.value,
        btnNewTab: isNewTab,
      };
      dispatch({ type: "addCtaBtn", payload: ctaBtnData });
      toast.success(`${btnNameRef.current.value} button Add`);
    }
  };

  return (
    <section className="add-cta-btn">
      <ToastContainer />
      <Link to="/">
        <button style={{ marginBottom: "25px" }} className="btn btn-primary">
          Back
        </button>
      </Link>

      <form onSubmit={ctaBtnHandler}>
        <div className="mb-3">
          <label htmlFor="btnName" className="form-label">
            Name of button
          </label>
          <input
            type="text"
            className={`form-control ${!isValidName ? "invalid-input" : ""}`}
            id="btnName"
            ref={btnNameRef}
            onFocus={() => setIsValidName(true)}
          />
          {!isValidName && (
            <p style={{ color: "red" }} className="text-center ">
              Button name is required
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="btnLink" className="form-label">
            Link
          </label>
          <input
            type="text"
            className={`form-control ${!isValidURL ? "invalid-input" : ""}`}
            id="btnLink"
            ref={btnLinkURL}
            onFocus={() => setIsValidURL(true)}
          />
          {!isValidURL && (
            <p style={{ color: "red" }} className="text-center ">
              Button url is required
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="btnColor" className="form-label">
            Button Color
          </label>
          <input
            type="color"
            className="form-control"
            id="btnColor"
            ref={btnColor}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="btnBg" className="form-label">
            Button Background
          </label>
          <input type="color" className="form-control" id="btnBg" ref={btnBg} />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="btnTab"
            checked={isNewTab}
            onChange={newTabHandler}
          />
          <label className="form-check-label" htmlFor="btnTab">
            Openable in a new tab
          </label>
        </div>
        <button type="submit" className="add-cta-btn-el btn btn-success">
          Add Button
        </button>
      </form>
    </section>
  );
};

export default AddCTABtn;
