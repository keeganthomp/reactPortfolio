import React from "react";
import Navigation from "./Navigation";

const Contact = () => {
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
      <div style={header}>The Contact Page</div>
    </div>
  );
};

export default Contact;
