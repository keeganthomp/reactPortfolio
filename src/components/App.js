import React, { Component } from "react";
import "../styles/App.css";
import BaseLayout from './BaseLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfoilio'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" component={BaseLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
