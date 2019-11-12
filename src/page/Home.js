import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Profile from "../assets/iqbal.jpg";
import FadeIn from "react-fade-in";
import WebDesign from "../assets/computer.svg";
import Food from "../assets/dish.svg";
import Learning from "../assets/programmer.svg";
import UX from "../assets/ux.svg";
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
                    <u>
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
                    </u>
                  </h5>
                </div>
                <div className="col-lg-6 col-md-12 banner-image text-center">
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
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={UX} alt="UI/UX Design" width="100px" />
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
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={WebDesign} alt="Web Design" width="100px" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        Web Design
                      </h5>
                      <p class="card-text text-secondary">
                        Sometimes also doing Web Design, recently I tried React
                        as framework for built this portfolio
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={Learning} alt="Learning" width="100px" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        Learning
                      </h5>
                      <p class="card-text text-secondary">
                        Learning isn't always in the classroom, you need to go
                        out and act like a superhero
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="services">
                    <div class="sevices-img text-center py-4">
                      <img src={Food} alt="Eat" width="100px" />
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title text-uppercase font-roboto">
                        Eat n Sleep
                      </h5>
                      <p class="card-text text-secondary">
                        Of course i need this.
                      </p>
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
