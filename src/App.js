import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Products from "./components/Products";
import About from "./components/About";

import { Context, ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <Context>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Context>
    </div>
  );
}

export default App;
