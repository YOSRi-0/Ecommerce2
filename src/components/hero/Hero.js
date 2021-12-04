import React from "react";
import "./Hero.style.css";

const Hero = (props) => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="hero__content">
          <h3 className="hero__content-title">Lorem ipsum dolor sit</h3>
          <p className="hero__content-text">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <button className="btn btn-light">shop now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
