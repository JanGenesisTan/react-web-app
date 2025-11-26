import React from "react";
import "./Footer.css";

import logo from "../assets/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Created by Jan Genesis Tan</strong></p>
          </div>
          <div className="col-md-6">
            <p>This web app uses the TMDB API</p>
            <a href="https://www.themoviedb.org/?language=en-CA" target="_blank">
              <img src={logo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
