import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <Home />} />
      </>
    );
  }
}

export default App;
