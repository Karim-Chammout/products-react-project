import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import ContextAPIButton from "./ContextAPIButton";
import { Link } from "react-router-dom";

function Nav(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${bgColor} ${textColor}`}
      >
        <div className="container">
          <ContextAPIButton />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="list-unstyled d-flex ms-auto">
              <li className="nav-item m-2">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item m-2">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item m-2">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="nav-item m-2">
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
