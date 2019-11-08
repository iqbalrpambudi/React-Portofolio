import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../style/style.css";
import "../style/responsive.css";

class header extends Component {
  render() {
    return (
      <header class="header_area">
        <div class="main-menu">
          <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="logo" width="50px" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to="/" className="nav-link">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" className="nav-link">
                    about
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/services" className="nav-link">
                    services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/portofolio" className="nav-link">
                    portfolio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/pages" className="nav-link">
                    pages
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/blog" className="nav-link">
                    blog
                  </Link>
                </li>
                <li class="nav-item">
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
