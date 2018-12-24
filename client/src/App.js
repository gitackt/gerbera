import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LandingComponent from './components/landing.component';
import LoginComponent from './components/login.component';

import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingComponent} />
          <Route exact={true} path="/login" component={LoginComponent} />
          <Route render={() => (<Redirect to={"/"} />)} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
