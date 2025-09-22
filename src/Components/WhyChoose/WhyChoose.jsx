import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <div className="why-wrapper">
      <div className="why-content">
        <h2>Why choose EzLicence?</h2>
        <p className="subtitle">
          Unlike a typical driving school, EzLicence allows learner drivers & parents to find, 
          <a href="https://www.ezlicence.co.uk/"> compare and book accredited driving instructors online.</a> 
          The platform brings transparency, choice and efficiency to the selection of a driving instructor 
          and the ongoing management of driving lessons.
        </p>

        {/* Stats Boxes */}
        <div className="stats">
          <div className="stat-box">
            <h1>250+</h1>
            <p>Driving Instructors</p>
          </div>
          <div className="stat-box">
            <h1>1,000+</h1>
            <p>Areas Serviced</p>
          </div>
        </div>

        {/* Features List */}
        <div className="features-list">
          <ul>
            <li>Choose your own private driving instructor</li>
            <li>Manage your driving lesson bookings online</li>
            <li>Licenced and accredited driving instructors</li>
            <li>Review all of the driving schools in your area</li>
          </ul>

          <ul>
            <li>Choose a driving instructor that suits you</li>
            <li>Change your driving instructor online</li>
            <li>Driving instructor cars dual controlled</li>
            <li>Patient & friendly male & female driving instructors</li>
          </ul>

          <ul>
            <li>Book driving lessons online in real-time</li>
            <li>International driver’s licence conversions</li>
            <li>Auto & manual cars available</li>
          </ul>

          <ul>
            <li>Driving instructor profiles, ratings & reviews</li>
            <li>Book driving lessons with flexibility</li>
            <li>Your very own private driving instructor</li>
          </ul>
        </div>

        {/* CTA Button */}
        <button className="yellow-btn">Book a driving school today</button>
      </div>
    </div>
  );
};

export default WhyChoose;
