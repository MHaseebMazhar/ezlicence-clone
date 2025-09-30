import React from 'react';
import './EzLicenceProcess.css';

// Custom SVG Icons
const UserIcon = () => (
  <svg className="ezl-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="ezl-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CarIcon = () => (
  <svg className="ezl-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.8-.7-1.5-1.5-1.5h-1.5V9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H9c-.8 0-1.5.7-1.5 1.5v3c0 .6.4 1 1 1h2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Steps data
const steps = [
  {
    title: "Find Your Driving Instructor",
    description: "Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.",
    Icon: UserIcon,
    uniqueClass: "ezl-step-find"
  },
  {
    title: "Book Online",
    description: "Book your driving lessons, driving test packages, international licence conversion, or refresher driving lessons online with instant confirmation.",
    Icon: CalendarIcon,
    uniqueClass: "ezl-step-book"
  },
  {
    title: "Learn to Drive!",
    description: "Your instructor picks you up from your chosen address and you're on your way.",
    Icon: CarIcon,
    uniqueClass: "ezl-step-learn"
  }
];

// Curved arrow component
const CurvedArrow = () => (
  <div className="ezl-arrow-container">
   <svg width="88" height="40" viewBox="0 0 188 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.000387941 38.0001C9.42477 21.844 54.971 2.69215 86.5966 0.96651C120.774 -0.97514 140.035 4.1044 178.558 25.5252C178.214 22.8509 177.7 20.6945 177.575 18.6983C177.336 16.4289 177.106 14.0278 177.399 11.7962C177.445 11.1371 178.725 10.0357 179.531 9.9605C180.338 9.88535 181.6 10.9026 181.819 11.5806C183.76 18.0782 185.435 24.5569 187.233 31.1768C187.747 33.3332 186.838 34.8584 184.533 35.357C175.75 36.8522 166.958 38.4793 158.051 39.8333C156.031 40.0871 153.678 39.3898 151.022 39.2009C153.55 33.6835 158.284 34.6827 161.84 33.4782C165.539 32.1513 169.456 31.5025 174.217 30.2512C163.719 22.0851 152.89 16.6778 141.276 12.937C98.7469 -0.951721 58.2648 5.17874 19.7688 26.5544C14.7624 29.3782 10.117 32.7575 5.23412 35.7226C3.72627 36.2778 2.35122 36.8424 -0.000387941 38.0001Z" fill="#FFE699"></path>
</svg>
  </div>
);

// Single step component
const ProcessStep = ({ title, description, Icon, uniqueClass }) => (
  <div className={`ezl-step-item ${uniqueClass}`}>
    <div className="ezl-step-icon-wrapper">
      <Icon />
    </div>
    <h3 className="ezl-step-title">{title}</h3>
    <p className="ezl-step-desc">{description}</p>
  </div>
);

// Main component
const EzLicenceProcess = () => {
  return (
    <div className="ezl-container">
      <div className="ezl-card">
        <header className="ezl-header">
          <h1>How EzLicence Works</h1>
          <p>We connect you with the best driving instructors in Wembley.</p>
        </header>

        <div className="ezl-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <ProcessStep {...step} />
              {index < steps.length - 1 && <CurvedArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EzLicenceProcess;
