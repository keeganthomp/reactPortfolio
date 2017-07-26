import React, { Component } from "react";
import Navigation from "./Navigation";
import "../styles/App.css";

class BaseLayout extends Component {
  render() {

    let center = {
        textAlign: "center"
    }

    let header = {
      color: "black",
      fontSize: 100
    };

    return (
      <div style={center}>
        <Navigation />
        <div style={header}>Keegan Thompson</div>
      </div>
    );
  }
}

export default BaseLayout;
