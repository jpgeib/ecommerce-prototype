import React, { Component } from "react";
import { Route } from "react-router-dom";
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" />
      </>
    );
  }
}

export default App;
