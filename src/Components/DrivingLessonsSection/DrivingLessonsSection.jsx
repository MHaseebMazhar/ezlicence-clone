import React from "react";
import "./DrivingLessonsSection.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="driving-service-card">
      <div className="driving-icon-box">{icon}</div>
      <div className="driving-text-box">
        <h3 className="driving-card-title">{title}</h3>
        <p className="driving-card-description">{description}</p>
      </div>
    </div>
  );
};

const DrivingLessonsSection = () => {
  const data = [
    {
      icon: "🚗",
      title: "Learner drivers",
      description:
        "Gain experience, prepare for your driving test and complete log book hours.",
    },
    {
      icon: "✅",
      title: "Driving tests",
      description:
        "Book a test package which includes pick-up, a pre-test lesson, use of a car & drop off.",
    },
    {
      icon: "🌎",
      title: "International conversions",
      description:
        "Convert your licence or simply build your confidence on UK roads.",
    },
  ];

  return (
    <div className="driving-section">
      <div className="driving-section-content">
        <h2 className="driving-section-title">Ready for driving lessons?</h2>
        <p className="driving-section-subtitle">
          EzLicence connects learner drivers with the best driving schools.
        </p>

        <div className="driving-pillar-container">
          <div className="driving-pillar-row">
            <ServiceCard {...data[0]} />
            <ServiceCard {...data[1]} />
          </div>
          <div className="driving-pillar-row-single">
            <ServiceCard {...data[2]} />
          </div>
        </div>

        <button className="driving-cta-btn">
          Book driving lessons now <span className="driving-arrow">›</span>
        </button>
      </div>

      <div className="driving-bottom-band"></div>
    </div>
  );
};

export default DrivingLessonsSection;
