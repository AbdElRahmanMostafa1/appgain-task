import React, { useState } from "react";
import "./actions-nav.css";

import { useDispatch } from "react-redux";
import UploadLogo from "./upload-logo/UploadLogo";
import { Link } from "react-router-dom";

const ActionsNav = (props) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitTitle = () => {
    dispatch({ type: "titleTextHandler", payload: title });
  };

  const titleColorHandler = (e) => {
    dispatch({ type: "colorHandler", payload: e.target.value });
  };

  const titleBgHandler = (e) => {
    dispatch({ type: "bgHandler", payload: e.target.value });
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="actions-title navbar-brand">Actions</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <UploadLogo />
            </li>
            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add new title"
                onChange={titleChangeHandler}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={submitTitle}
              >
                Change
              </button>
            </div>
            <li className="nav-item">
              <label
                style={{ color: "white" }}
                htmlFor="titleColor"
                className="form-label"
              >
                Change Title Color
              </label>
              <div className="input-group mb-3">
                <input
                  type="color"
                  className="form-control"
                  id="titleColor"
                  onChange={titleColorHandler}
                />
              </div>
            </li>
            <li className="nav-item">
              <label
                style={{ color: "white" }}
                htmlFor="titleColor"
                className="form-label"
              >
                Change Title Background
              </label>
              <div className="input-group mb-3">
                <input
                  type="color"
                  className="form-control"
                  id="titleColor"
                  onChange={titleBgHandler}
                />
              </div>
            </li>
            <li className="nav-item">
              <Link replace to="/addctabtn">
                <button type="button" className="btn btn-primary">
                  Add CTA Btn
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ActionsNav;
