import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar({ photoUpload, returnDefaultView }) {
  return (
    <div className="navbar">
      <a className="navbar-header" onClick={() => returnDefaultView}>
        Home
      </a>
      <Upload className="button" onUpload={photoUpload} />
    </div>
  );
}
