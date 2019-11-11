import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../style/style.css";
import "../style/responsive.css";

class header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="main-menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="logo" width="50px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default header;
