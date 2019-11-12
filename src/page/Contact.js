import React, { Component } from "react";
import Phone from "../assets/phone.jpg";
import FadeIn from "react-fade-in";
import "font-awesome/css/font-awesome.min.css";

class Contact extends Component {
  render() {
    return (
      <FadeIn>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5 my-5">
              <img src={Phone} alt="phone" className="mt-5 img-fluid" />
            </div>
          </div>
          <div class=" social text-center ">
            <h5 class="text-uppercase mb-3">Follow me</h5>
            <a href="https://facebook.com/igbalrilopambudi" className="mx-4">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="https://github.com/iqbalrpambudi" className="mx-4">
              <i className="fa fa-github fa-lg"></i>
            </a>
            <a href="https://instagram.com/iqbalrpambudi" className="mx-4">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="https://twitter.com/iqbalrpambudi" className="mx-4">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Contact;
