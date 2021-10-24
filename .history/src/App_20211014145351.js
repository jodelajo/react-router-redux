import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:user" component={Card} />
      </Switch>
    </div>
  );
}

export default App;
