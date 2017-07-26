import React, { Component } from "react";
import Navigation from "./Navigation";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>What Up- This is the home page</div>
        <Navigation />
      </div>
    );
  }
}

export default BaseLayout;
