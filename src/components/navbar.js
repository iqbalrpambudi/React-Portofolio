import React, { Component } from "react";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <Link to="/" className="nav-item nav-link font-weight-light px-3">
                Home
              </Link>
              <Link
                to="/project"
                className="nav-item nav-link font-weight-light px-3"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="nav-item nav-link font-weight-light px-3"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
