import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Home from "./containers/Home";
import Header from "./components/Header";
import Publish from "./containers/Publish";
import Modify from "./containers/Modify";
import ProductById from "./containers/PorductById";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/modify/:id">
            <Modify />
          </Route>
          <Route path="/product/:id">
            <ProductById />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
