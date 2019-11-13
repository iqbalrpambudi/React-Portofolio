import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../style/style.css"
import "../style/responsive.css"

class header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="main-menu">
          <nav
            id="nav1"
            className="navbar navbar-expand-lg navbar-light fixed-top transparent"
          >
            <Link to="/" className="navbar-brand">
              <p className="lead">Portofolio</p>
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
                <li className="nav-item">
                  <Link to="/" className="nav-link font-weight-light">
                    01 Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link font-weight-light">
                    02 About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link font-weight-light">
                    03 Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.iqbalpambudi.com"
                    className="nav-link font-weight-light"
                  >
                    04 Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link font-weight-light">
                    05 Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default header
