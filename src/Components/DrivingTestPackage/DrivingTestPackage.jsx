import React from "react";
import "./DrivingTestPackage.css";

const DrivingTestPackage = () => {
  return (
    <div className="driving-wrapper">
      {/* Top Section */}
      <div className="driving-top">
        <div className="driving-content">
          <div className="driving-title">
            <div className="p-icon">P</div>
            <h2>Driving test package</h2>
          </div>

          <ul className="driving-list">
            <li>✔ Pick-up 1hr prior to test start time</li>
            <li>✔ 45 min pre-test warm up</li>
            <li>✔ Use of instructor’s vehicle to sit the test</li>
            <li>✔ Drop-off after the test result is received</li>
          </ul>

          <button className="yellow-btn">Book Test Package Now</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="driving-bottom">
        <div className="bottom-content">
          <h2>Book driving lessons with confidence</h2>
          <p className="subtitle">Choose a driving instructor you can trust</p>

          <div className="features-grid">
            <div className="feature-box">
              <img src="/1.jpg" alt="ratings" className="icon-img" />
              <h3>Instructor ratings</h3>
              <p>Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
            </div>

            <div className="feature-box">
              <img
                src="/tranpay-prevod.jpg"
                alt="accredited"
                className="icon-img"
              />
              <h3>Accredited</h3>
              <p>
                We obtain up to date copies of relevant instructor
                accreditations.
              </p>
            </div>

            <div className="feature-box">
              <img
                src="/download.jpeg"
                alt="vehicle safety"
                className="icon-img"
              />
              <h3>Vehicle safety</h3>
              <p>
                Gain access to instructor vehicle make, model, year & safety
                rating.
              </p>
            </div>

            <div className="feature-box">
              <img src="/download (1).png" alt="choice" className="icon-img" />
              <h3>Always your choice</h3>
              <p>
                Don't like your current instructor? Select a new instructor via our online portal, no questions asked.
              </p>
            </div>
          </div>

          <button className="yellow-btn">Book driving lessons now</button>
        </div>
      </div>
    </div>
  );
};

export default DrivingTestPackage;
