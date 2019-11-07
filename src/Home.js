import React, { Component } from "react";
import Typing from "react-typing-animation";
import Profile from "./assets/profile.jpg";

function Type() {
  return (
    <Typing>
      <h1 class="display-4">
        <span>
          Hello there!
          <Typing.Delay ms={1000} />
        </span>
      </h1>
      <p class="lead">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </Typing>
  );
}

function Bio() {
  return (
    <img class="rounded-circle" src={Profile} alt="profile" width="200px" />
  );
}
class Home extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <Bio />
          <Type />
        </div>
      </div>
    );
  }
}

export default Home;
