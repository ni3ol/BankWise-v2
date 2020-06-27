import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import { Banks } from "../components/Banks";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/banks" exact component={Banks} />
    </Switch>
  </Router>
);