import React, { Component } from "react";
import AboutImg from "../assets/lights.jpg";
import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in";
import "../style/style.css";
import "../style/responsive.css";

class About extends Component {
  render() {
    return (
      <section class="about-area">
        <div class="container-fluid">
          <FadeIn>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="about-image pt-5">
                  <img src={AboutImg} alt="About us" class="img-fluid" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 about-title">
                <h2 class="text-uppercase pt-5">
                  <span>
                    <Typewriter
                      onInit={typewriter => {
                        typewriter
                          .typeString("Let me introduce my self")
                          .start();
                      }}
                    />
                  </span>
                </h2>
                <div class="paragraph py-4 w-75">
                  <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error rerum iure obcaecati vel possimus officia maiores
                    perferendis ut! Quos, perspiciatis.
                  </p>
                  <p class="para">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here
                  </p>
                </div>
                <button
                  type="button"
                  class="btn button primary-button text-uppercase"
                >
                  Download cv
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }
}

export default About;
