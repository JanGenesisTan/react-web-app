import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const appName = "PopReact";

  return (

    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div className="container">
        {/* <!-- Brand --> */}
        <Link to="/" className="navbar-brand">
          {appName}
        </Link>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav text-center ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/popular" className="nav-link">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/upcoming" className="nav-link">
                Upcoming
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/concession" className="nav-link">
                Concession
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
