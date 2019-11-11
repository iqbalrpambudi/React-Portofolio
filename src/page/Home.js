import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Profile from "../assets/profile.jpg";
import FadeIn from "react-fade-in";
import "../style/style.css";
import "../style/responsive.css";

class Home extends Component {
  render() {
    return (
      <section className="site-banner">
        <div className="container">
          <FadeIn>
            <div className="row">
              <div className="col-lg-6 col-md-12 site-title">
                <h3 className="title-text"> </h3>

                <h2 className="title-text text-uppercase">
                  <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString("IQBA;")
                        .pauseFor(100)
                        .deleteChars(5)
                        .typeString("IQBAL RILO PANB")
                        .deleteChars(4)
                        .pauseFor(100)
                        .typeString("PAMBUDI")
                        .start();
                    }}
                  />
                </h2>
                <h4>I AM</h4>
                <h5 className=" text-uppercase">
                  <Typewriter
                    options={{
                      strings: [
                        "Computer science students",
                        "LifeLong Learner",
                        "now What?"
                      ],
                      delay: 100,
                      autoStart: true,
                      loop: true
                    }}
                  />
                </h5>
                <div className="site-buttons">
                  <div className="d-flex flex-row flex-wrap">
                    <button
                      type="button"
                      className="btn button primary-button mr-4 text-uppercase"
                    >
                      hire me
                    </button>
                    <button
                      type="button"
                      className="btn button secondary-button text-uppercase"
                    >
                      Get cv
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 banner-image">
                <img
                  src={Profile}
                  alt="banner-img"
                  className="img-fluid"
                  width="200px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }
}

export default Home;
