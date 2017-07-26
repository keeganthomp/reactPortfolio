import React from "react";
import Navigation from "./Navigation";

const Contact = () => {
  let header = {
    color: "white",
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
      <p>phone: (444)-888-1212</p>
      <p>email: tomsquare@gmail.com</p>
      <p>social: socialmedia.com/tomsquare</p>
    </div>
  );
};

export default Contact;
