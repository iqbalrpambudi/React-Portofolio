import React, { Component } from "react"
import FadeIn from "react-fade-in"
import Img1 from "../assets/images-projects/innside.jpg"
import Img2 from "../assets/images-projects/putra-tanjung.jpg"
import Img3 from "../assets/images-projects/tonystark.png"
import Img4 from "../assets/images-projects/childplaymarble.png"
import Img5 from "../assets/images-projects/pisangcoklat.png"
import Img6 from "../assets/images-projects/penpals.jpg"

class Projects extends Component {
  render() {
    return (
      <FadeIn>
        <section className="project-area mt-5">
          <div className="container">
            <div className="project-title pb-5">
              <h1 className="text-uppercase title-h1">
                when i have 'Gabut' time
              </h1>
            </div>

            <div className="button-group">
              <button
                type="button"
                className="active"
                id="btn1"
                data-filter="*"
              >
                All
              </button>
              <button type="button" data-filter=".logo">
                Logo
              </button>
              <button type="button" data-filter=".vector">
                Vector
              </button>
              <button type="button" data-filter=".stratch">
                Stratch
              </button>
              <button type="button" data-filter=".upcoming">
                Upcoming
              </button>
            </div>

            <div className="row grid">
              <div className="col-lg-4 col-md-6 col-sm-12 element-item logo">
                <div className="our-project">
                  <div className="img">
                    <img src={Img1} alt="portfolio-1" className=" img-fluid" />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Minimalist Logo</h4>
                    <span className="text-secondary">#Brand, #Logo</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item vector">
                <div className="our-project">
                  <div className="img">
                    <img src={Img3} alt="Tony Starks" className="img-fluid" />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Tony Stark</h4>
                    <span className="text-secondary">#Vector, #CorelDraw</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item logo">
                <div className="our-project">
                  <div className="img">
                    <img src={Img2} alt="Putra Tanjung" className="img-fluid" />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Youth Organization</h4>
                    <span className="text-secondary">#Logo, #Brand</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item vector">
                <div className="our-project">
                  <div className="img">
                    <img
                      src={Img4}
                      alt="Child Play Marble"
                      className="img-fluid"
                    />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Child Play Marble</h4>
                    <span className="text-secondary">#vector, #child</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item logo">
                <div className="our-project">
                  <div className="img">
                    <img src={Img5} alt="Choco banana" className="img-fluid" />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Choco Banana</h4>
                    <span className="text-secondary">#Brand, #Design</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item stratch">
                <div className="our-project">
                  <div className="img">
                    <img src={Img6} alt="portfolio-6" className="img-fluid" />
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Pen Pals</h4>
                    <span className="text-secondary">
                      #graduation, #highschools
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                <div className="our-project">
                  <div className="img">
                    <a
                      className="test-popup-link"
                      href="./img/portfolio/p7.jpg"
                    >
                      <img
                        src="./img/portfolio/p7.jpg"
                        alt="portfolio-7"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Green Heaven</h4>
                    <span className="text-secondary">Following, Portfolio</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                <div className="our-project">
                  <div className="img">
                    <a
                      className="test-popup-link"
                      href="./img/portfolio/p8.jpg"
                    >
                      <img
                        src="./img/portfolio/p8.jpg"
                        alt="portfolio-8"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Fly Male</h4>
                    <span className="text-secondary">Following, Portfolio</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                <div className="our-project">
                  <div className="img">
                    <a
                      className="test-popup-link"
                      href="./img/portfolio/p9.jpg"
                    >
                      <img
                        src="./img/portfolio/p9.jpg"
                        alt="portfolio-9"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Camera Lens</h4>
                    <span className="text-secondary">Upcoming, Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    )
  }
}

export default Projects
