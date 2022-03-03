import React from "react";
import "./app-nav.css";

import { useSelector } from "react-redux";
import { Image, Transformation } from "cloudinary-react";

const AppNav = ({ logoURL }) => {
  const ctaBtns = useSelector((e) => e.ctaBtns);
  const logo = useSelector((e) => e.navLogo);

  return (
    <nav className="app-nav navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Image className="logo" cloudName="diyz1ovpw" publicId={logo}>
          <Transformation crop="scale" width="50" angle="90" />
        </Image>
        <ul className="navbar-nav mb-2 mb-lg-0">
          {ctaBtns.map((btn) => (
            <li key={btn.btnLinkURL}>
              <a
                className="nav-link"
                href={btn.btnLinkURL}
                target={`rel="noreferrer" ${btn.btnNewTab ? "_blank" : ""}`}
                style={{ color: btn.btnColor, backgroundColor: btn.btnBg }}
              >
                {btn.btnName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AppNav;
