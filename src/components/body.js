import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Project";

class body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Projects} />
      </div>
    );
  }
}

export default body;
