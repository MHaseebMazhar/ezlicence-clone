import React from "react";
import "./DrivingPackageSection.css";

const DrivingPackageSection = () => {
  return (
    <div className="dps-container">
      <div className="dps-content">
        
        {/* Top Section */}
        <div className="dps-top-section">
          <div className="dps-left-content">
            <h1 className="dps-heading">
              Pass with confidence – everything you need in one package.
            </h1>
            <p className="dps-description">
              Feel confident on test day with a 45-minute pre-test warm-up to shake off nerves and
              sharpen your skills, plus the use of your instructor's fully insured, test-ready car.
            </p>
          </div>

          <div className="dps-right-image">
            <img src="/female-holding-check-list-4c0823acd16f29b50e75a273bab0e3549d462c549f50340b51b074523738af85.svg" alt=""/>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="dps-bottom-section">
          <div className="dps-car-illustration">
            <img src="/drive-in-car-4511329f4f5ebf4fd4795cb08d26a08a235a1b0e739af3336da770bf84c0b811.svg" alt=""/>
          </div>

          <div className="dps-info-box">
            <h2 className="dps-subheading">
              Not test-ready yet? We've got you covered!
            </h2>
            <p className="dps-info-text">
              Build your confidence and skills with driving lesson packages designed to help you pass.
              With EzLicence, you can learn in the same instructor's car you'll use for your test—so there
              are no surprises on the big day.
            </p>
            <p className="dps-cta-text">
              Enter your suburb below to view our driving lessons packages now.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DrivingPackageSection;
