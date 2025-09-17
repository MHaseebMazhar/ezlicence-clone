import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <h2>How EzLicence works</h2>
      <p className="subtitle">Simple, Trusted & Flexible Booking System</p>

      <div className="steps">
        <div className="step">
          <div className="icon">1</div>
          <div className="content">
            <h3>Browse Our Trusted Driving Instructors</h3>
            <p>
              Choose from a wide variety of instructors in your area. Check
              rating & reviews from real learners.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="icon">2</div>
          <div className="content">
            <h3>Book Lessons In Under 5 Mins</h3>
            <p>
              Book online with instant confirmation. Easily manage your lesson
              schedule via our online dashboard.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="icon">3</div>
          <div className="content">
            <h3>Get Your Licence</h3>
            <p>
              Your instructor picks you up from your chosen address and you're
              on your way 🚗
            </p>
          </div>
        </div>
      </div>

      <button className="cta">Start learning to drive now ➜</button>
    </div>
  );
};

export default HowItWorks;
