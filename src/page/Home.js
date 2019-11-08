import React, { Component } from "react";
import Typing from "react-typing-animation";
import Profile from "../assets/profile.jpg";
import "../style/style.css";
import "../style/responsive.css";

class Home extends Component {
  render() {
    return (
      <section class="site-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 site-title">
              <h3 class="title-text">Hey</h3>
              <Typing>
                <h1 class="title-text text-uppercase font-weight-light">
                  I am Iqbal
                </h1>
              </Typing>
              <h4 class="title-text text-uppercase">
                computer science student
              </h4>
              <div class="site-buttons">
                <div class="d-flex flex-row flex-wrap">
                  <button
                    type="button"
                    class="btn button primary-button mr-4 text-uppercase"
                  >
                    hire me
                  </button>
                  <button
                    type="button"
                    class="btn button secondary-button text-uppercase"
                  >
                    Get cv
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 banner-image">
              <img
                src={Profile}
                alt="banner-img"
                class="img-fluid"
                width="200px"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
