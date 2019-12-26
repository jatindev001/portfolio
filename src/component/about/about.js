import React from "react";
import "./about.css";
export const About = () => {
  return (
    <div className="container">
      <div className="imageContainer">
        <img
          height={50}
          width={50}
          src="https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01_l.jpg"
        />
      </div>
      <div className="aboutContainer" />
    </div>
  );
};
