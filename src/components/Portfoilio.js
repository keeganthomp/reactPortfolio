import React, { Component } from "react";
import Navigation from "./Navigation";

export default class Portfolio extends Component {
  render() {
    let header = {
      color: "black",
      fontSize: 100
    };

    let center = {
      textAlign: "center"
    };

    return (
      <div style={center}>
        <Navigation  />
        <div style={header}>The Portfolio</div>
      </div>
    );
  }
}
