import React from "react";
import "./Flexibility.css";

const Flexibility = () => {
  return (
    <div className="flexibility-main">
      {/* Header */}
      <div className="flexibility-header">
        <div className="flexibility-header-title">
          Flexibility, independence & growth
        </div>
        <div className="flexibility-header-subtitle">
          Set your own schedule & lesson price, instruct, on your terms.
        </div>
      </div>

      {/* 6 Grid Items */}
      <div className="flexibility-grid">
        <div className="flexibility-item">
          <img
            src="/page-instruct-collection-avatar-people-young-senior-men-women-aa3814be9af210f1dacf2d0546705ec570aa0c9f31c70f4e13dfd7fa9cfa51c3.jpg"
            alt="Set Your Own Schedule"
            className="flexibility-icon"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flexibility-buttons">
        <div className="flexibility-btn primary">Join now</div>
        <div className="flexibility-btn secondary">Speak to our team</div>
      </div>
    </div>
  );
};

export default Flexibility;
