import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Collection from "../../pages/Collection";

import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/collection" render={() => <Collection />} />
        <Route exact path="/product" />
        <Route exact path="/cart" />
        <Route exact path="/checkout" />
        <Route exact path="/customer/:customer" />
        <Route exact path="/gift-card" />
      </>
    );
  }
}

export default App;
