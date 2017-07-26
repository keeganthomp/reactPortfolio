import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";

const Navbar = function() {
  let styles = {
    navLinks: {
      fontFamily: "Poiret One",
      margin: 10,
      textDecoration: "none",
      color: "black",
      textTransform: "uppercase",
      ":hover": {
        color: "blue"
      }
    }
  };

  return (
    <nav>
      <Link style={styles.navLinks} to="/">
        Home
      </Link>
      <Link style={styles.navLinks} to="/About">
        About
      </Link>
      <Link style={styles.navLinks} to="/Contact">
        Contact
      </Link>
      <Link style={styles.navLinks} to="/Portfolio">
        Portfolio
      </Link>
    </nav>
  );
};
export default Radium(Navbar);
