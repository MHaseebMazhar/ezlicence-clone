import React from "react";
import "./FeaturesSection.css";

const FeatureItem = ({ img, title }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={title} className="feature-icon" />
      <p>{title}</p>
    </div>
  );
};

export default FeatureItem;
