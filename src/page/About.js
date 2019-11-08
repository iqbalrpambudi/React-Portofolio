import React, { Component } from "react";
import Logo from "../assets/logo.png";

class About extends Component {
  render() {
    return (
      <div class="container text-center mt-5">
        <img src={Logo} width="200px" alt="logo" />
        <h4>Iqbal Rilo Pambudi</h4>
      </div>
    );
  }
}

export default About;
