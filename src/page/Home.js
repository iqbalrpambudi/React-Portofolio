import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Profile from "../assets/profile.jpg";
import FadeIn from "react-fade-in";
import Mouse from "../assets/s1.png";
import Ball from "../assets/s2.png";
import Paperplane from "../assets/s3.png";
import Rocket from "../assets/s4.png";
import "../style/style.css";
import "../style/responsive.css";

class Home extends Component {
  render() {
    return (
      <>
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
                </div>
                <div className="col-lg-6 col-md-12 banner-image">
                  <img src={Profile} alt="banner-img" className="img-fluid" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section class="services-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center services-title">
                <h2 class="text-uppercase title-text-2">what i'm doing now</h2>
              </div>
            </div>
            <div class="container services-list">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={Ball} alt="UI/UX Design" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        UI/UX design
                      </h5>
                      <p class="card-text text-secondary">
                        I like to make UI/UX design especially clean, modern,
                        and minimalist design
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={Paperplane} alt="Services-2" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        Learning
                      </h5>
                      <p class="card-text text-secondary">
                        Learning isn't always in the class, you need to go out
                        and act like a superhero
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={Rocket} alt="Services-3" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        Learning Again
                      </h5>
                      <p class="card-text text-secondary">No capt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
