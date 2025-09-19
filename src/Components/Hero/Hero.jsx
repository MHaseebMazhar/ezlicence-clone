import React from "react";
import "./Hero.css";
import Searchform from "../Searchform/Searchform";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/header-steering-wheel-a7650a5ba41db5705a38649fad87dbddca6b0119fbfc9e5b69db4379cd9717b4.webp"
        alt="Driving Instructor"
        className="hero-image"
      />

      <div className="hero-text">
        <h1>Discover Top Driving Instructors Near You</h1>
        <p className="rating"><img src="/222.png" alt=""/>Rated <strong>4.9</strong> ⭐⭐⭐⭐⭐ (9,700)</p>
      </div>

      {/* search bar overlay */}
      <div className="search-overlay">
        <Searchform />
      </div>
    </section>
  );
};

export default Hero;
