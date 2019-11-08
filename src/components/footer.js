import React, { Component } from "react";
import "../style/style.css";
import "../style/responsive.css";

class footer extends Component {
  render() {
    return (
      <footer class="footer-area">
        <div class="container">
          <div class="">
            <div class="copyrights text-center">
              <p class="para">
                Copyright ©2019 All rights reserved | This portofolio is made
                with
                <a href="https://reactjs.org">
                  <span> React</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
