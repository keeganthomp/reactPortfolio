import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}
