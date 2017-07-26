import React from "react";
import Navigation from "./Navigation";
import "../styles/App.css";
import Radium from 'radium';

const BaseLayout = () => {
  let center = {
    textAlign: "center"
  };

  let header = {
    color: "black",
    fontSize: 100,
    ':hover': {
        color: "pink"
    }
  };

  return (
    <div style={center}>
      <Navigation />
      <div style={header}>Keegan Thompson</div>
    </div>
  );
};

export default Radium(BaseLayout);
