import React, { useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const UploadLogo = () => {
  const [logo, setLogo] = useState();
  const [isLogoSelected, setIsLogoSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let logoInputRef = useRef();
  const dispatch = useDispatch();

  const logoChangeHandler = (e) => {
    setLogo(e.target.files[0]);
    setIsLogoSelected(true);
    setIsLoading(false);
  };

  const uploadLogoHandler = async () => {
    const formData = new FormData();
    formData.append("file", logo);
    formData.append("upload_preset", "evm7xd5a");
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/diyz1ovpw/image/upload",
        formData
      );
      dispatch({ type: "Update_Logo_Handler", payload: data.secure_url });
      setIsLogoSelected(false);
    } catch (error) {
      return <ErrorModal />;
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={logoChangeHandler}
        ref={(logoInput) => (logoInputRef = logoInput)}
      />
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={() => logoInputRef.click()}
      >
        Pick Logo
      </button>
      {isLogoSelected && (
        <button
          onClick={uploadLogoHandler}
          type="button"
          className="btn btn-secondary"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Upload Logo"}
        </button>
      )}
    </>
  );
};

export default UploadLogo;
