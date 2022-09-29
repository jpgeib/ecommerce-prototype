import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/contact" />
        <Route exact path="/collection" />
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
