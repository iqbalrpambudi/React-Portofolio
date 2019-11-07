import React, { Component } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Body />
      </Router>
    );
  }
}
export default App;
