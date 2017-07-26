import React from "react";
import Navigation from "./Navigation";

const Portfolio = () => {
  let header = {
    color: "black",
    fontSize: 100,
    fontFamily: "Poiret One"
  };

  let center = {
    textAlign: "center"
  };

  return (
    <div style={center}>
      <Navigation />
      <div style={header}>The Portfolio</div>
    </div>
  );
};

export default Portfolio;
