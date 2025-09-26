import React from "react";
import "./OnboardingSection.css";

const CheckIcon = () => (
  <svg
    className="onboarding-check-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const features = [
  "One-to-one guidance from our specialised team",
  "Fully verified and ready to take bookings within 48 hours",
  "Learn at your own pace with a wealth of training materials",
];

const OnboardingSection = () => {
  return (
    <div className="onboarding-container" >
     
      <div className="onboarding-wrapper">
        <div className="onboarding-grid">
          <div className="onboarding-left">
            <h1 className="onboarding-title">100,000 Learners</h1>
            <p className="onboarding-subtitle">
              have booked through our platform
            </p>
          </div>
          <div className="onboarding-right">
            <h2 className="onboarding-heading">
              The Onboarding Process & How We Support You
            </h2>
            <ul className="onboarding-list">
              {features.map((feature, index) => (
                <li key={index} className="onboarding-list-item">
                  <CheckIcon />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;
