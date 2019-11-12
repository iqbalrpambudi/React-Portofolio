import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Footer from "./footer";

import "../style/style.css";
import "../style/responsive.css";

class body extends Component {
  render() {
    return (
      <>
        <main className="site-main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </>
    );
  }
}

export default body;
