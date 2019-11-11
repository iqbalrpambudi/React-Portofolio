import React, { Component } from "react";
import Heart from "../assets/heart.gif";
import "../style/style.css";
import "../style/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";

class footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="">
              <div className="copyrights text-center">
                <p className="para">
                  Made with
                  <a href="https://reactjs.org">
                    <span> ReactJS</span>
                    <img src={Heart} width="25px" alt="heart" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default footer;
