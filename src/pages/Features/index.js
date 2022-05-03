import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Products from "./Products";

function Features() {
  return (
    <>
      <Switch>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Features;
