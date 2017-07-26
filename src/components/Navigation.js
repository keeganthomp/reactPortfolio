import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let navLinks = {
      margin: 10,
      textDecoration: "none",
      color: "black"
    };

    return (
      <nav>
        <Link style={navLinks} to="/">
          Home
        </Link>
        <Link style={navLinks} to="/About">
          About
        </Link>
        <Link style={navLinks} to="/Contact">
          Contact
        </Link>
        <Link style={navLinks} to="/Portfolio">
          Portfolio
        </Link>
      </nav>
    );
  }
}
