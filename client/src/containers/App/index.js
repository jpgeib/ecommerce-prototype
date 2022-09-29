import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Collection from "../../pages/Collection";
import Product from "../../pages/Product";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Customer from "../../pages/Customer";
import GiftCard from "../../pages/GiftCard";

import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/collection" render={() => <Collection />} />
        <Route exact path="/product" render={() => <Product />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/checkout" render={() => <Checkout />} />
        <Route exact path="/customer/" render={() => <Customer />} />
        <Route exact path="/customer/:customer" />
        <Route exact path="/gift-card" render={() => <GiftCard />} />
      </>
    );
  }
}

export default App;
