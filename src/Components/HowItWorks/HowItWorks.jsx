import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks-section">
      <h2 className="howitworks-title">How EzLicence works</h2>
      <p className="howitworks-subtitle">
        Simple, Trusted & Flexible Booking System
      </p>

      <div className="howitworks-steps">
        <div className="howitworks-step">
          <div className="howitworks-icon">1</div>
          <div className="howitworks-content">
            <h3>Browse Our Trusted Driving Instructors</h3>
            <p>
              Choose from a wide variety of instructors in your area. Check
              rating & reviews from real learners.
            </p>
          </div>
        </div>

        <div className="howitworks-step">
          <div className="howitworks-icon">2</div>
          <div className="howitworks-content">
            <h3>Book Lessons In Under 5 Mins</h3>
            <p>
              Book online with instant confirmation. Easily manage your lesson
              schedule via our online dashboard.
            </p>
          </div>
        </div>

        <div className="howitworks-step">
          <div className="howitworks-icon">3</div>
          <div className="howitworks-content">
            <h3>Get Your Licence</h3>
            <p>
              Your instructor picks you up from your chosen address and you're
              on your way 🚗
            </p>
          </div>
        </div>
      </div>

      <button className="howitworks-cta">
        Start learning to drive now ➜
      </button>
    </div>
  );
};

export default HowItWorks;
