import React, { useState } from "react";
import "./DrivingInstructorPage.css";


const DrivingInstructorPage = () => {
  const [transmission, setTransmission] = useState("Manual");
  const [postcode, setPostcode] = useState("");

  const handleSearch = () => {
    if (!postcode.trim()) {
      alert("Please enter a postcode");
      return;
    }
    alert(`Searching ${transmission} instructors in ${postcode}`);
  };

  return (
    <div className="dip-container">
    

     

      {/* Search Section */}
      <div className="dip-search">
        <h2 className="dip-search-title">
          Search driving instructors in London
        </h2>
        <p className="dip-search-subtitle">
          Discover local driving instructors, convenient, hassle-free, search in
          your neighbourhood
        </p>

        <div className="dip-search-box">
          {/* Transmission Toggle */}
          <div className="dip-toggle">
            <button
              className={`dip-toggle-btn ${
                transmission === "Auto" ? "active" : ""
              }`}
              onClick={() => setTransmission("Auto")}
            >
              <span className="dlp-check">✓ </span>
              Auto
            </button>
            <button
              className={`dip-toggle-btn ${
                transmission === "Manual" ? "active" : ""
              }`}
              onClick={() => setTransmission("Manual")}
            >
              <span className="dlp-check">✓ </span>
              Manual
            </button>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter your postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="dip-input"
          />

          {/* Button */}
          <button className="dip-search-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrivingInstructorPage;
