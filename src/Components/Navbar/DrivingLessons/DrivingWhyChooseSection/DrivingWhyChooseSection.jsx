import React from "react";
import "./DrivingWhyChooseSection.css";

// Data for the feature blocks
const drivingWhyChooseFeatures = [
  {
    title: "Flexible Instructor Options",
    description:
      "Change your instructor at any time to ensure a perfect fit for your learning style.",
  },
  {
    title: "Convenient Online Booking",
    description:
      "Fit your lessons into your busy schedule with 24/7 booking management.",
  },
  {
    title: "Stress Free Test Package",
    description:
      "Driving test and driving lesson packages ensure you're ready for your driving test.",
  },
  {
    title: "Gift Vouchers",
    description:
      "Driving lesson gift cards unlock access to Australia's largest network of driving schools.",
  },
  {
    title: "Pricing Options",
    description: "Bulk lesson discounts & transparent instructor pricing.",
  },
];

// Main Component
const DrivingWhyChooseSection = () => {
  return (
    <div className="drivingwhy-container">
      <div className="drivingwhy-wrapper">
        {/* Header Section */}
        <div className="drivingwhy-header">
          <h2 className="drivingwhy-title">Why choose us?</h2>
          <p className="drivingwhy-subtitle">
            We are committed to your progress and success, and our goal is to
            prepare you for your driving test as efficiently as possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="drivingwhy-grid">
          {drivingWhyChooseFeatures.map((feature, index) => (
            <div key={index} className="drivingwhy-card">
              <h3 className="drivingwhy-card-title">{feature.title}</h3>
              <p className="drivingwhy-card-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivingWhyChooseSection;
