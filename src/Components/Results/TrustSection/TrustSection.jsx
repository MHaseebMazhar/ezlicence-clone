import React from 'react';
import './TrustSection.css'; // unique CSS file

// Checklist item component
const CheckedTrustedItem = ({ text }) => (
  <li className="cts-check-item">
    <span className="cts-check-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#f7b731"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </span>
    <span className="cts-check-text">{text}</span>
  </li>
);

const TrustSection = () => {
  const checklist = [
    'Are police checked',
    'Are fully insured',
    'Have dual controls',
  ];

  return (
    <section className="cts-section">
      <div className="cts-wrapper">

        {/* Left side: Illustration */}
        <div className="cts-illustration">
          <img
            src="/female-holding-check-list-4c0823acd16f29b50e75a273bab0e3549d462c549f50340b51b074523738af85.svg" // Replace with actual SVG or image
            alt="Instructor verification illustration"
            className="cts-img"
          />
        </div>

        {/* Right side: Text & checklist */}
        <div className="cts-text-block">
          <h2 className="cts-heading">Checked, Verified, Trusted!</h2>
          <p className="cts-subheading">All instructors:</p>

          <ul className="cts-checklist">
            {checklist.map((item, idx) => (
              <CheckedTrustedItem key={idx} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
