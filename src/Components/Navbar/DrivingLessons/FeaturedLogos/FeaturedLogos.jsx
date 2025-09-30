import React from "react";
import "./FeaturedLogos.css";

// Data for logos (real image paths as in your example)
const featuredLogos = [
  {
    name: "Herald Sun",
    src: "/herald-sun-bafdf2fb3ce8513f94e76b8ed55162294dd3c705da0f26fc05124cc92e030540.png",
  },
  {
    name: "Courier Mail",
    src: "/the-courier-mail-123d9b51248379e609e9bbf8849b4691fd3a3b4e2ea7d99780bd7e34ca36e39a.png",
  },
  {
    name: "The Daily Telegraph",
    src: "/the-daily-celegraph-fa1599cfb81efe54c8ed38359e12e403da146646cd9a6511f17c1cf42ab5df8c.png",
  },
  {
    name: "7NEWS",
    src: "/7news-39d23b52df170d4e60a98f0d9d3a0ff9edfd83c1f7324bd92bdb3da949ba5daf.png",
  },
  {
    name: "ABC",
    src: "/abc-news-08a2c629ebd9dc4ff75d56c6dd3be0b43a46b069ccb8126d0c45574e996d4a80.png",
  },
];

const FeaturedLogos = () => {
  return (
    <div className="search-instructors__page-section">
      <div className="search-instructors__title-section">
        <h3 className="search-instructors__large-title">As featured in</h3>
      </div>
      <div className="as-feature-in__wrapper">
        {featuredLogos.map((logo) => (
          <div className="featured-logo" key={logo.name}>
            <img src={logo.src} alt={`Featured in ${logo.name}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLogos;
