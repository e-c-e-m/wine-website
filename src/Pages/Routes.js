import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import AgeVerification from "./AgeVerification/AgeVerification";
import Home from "./Home/Home";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={AgeVerification} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
