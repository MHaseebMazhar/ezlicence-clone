import React, { useState } from "react";
import "./DriveSearchSection.css";

const DriveSearchSection = () => {
  const [postcode, setPostcode] = useState("");
  const [transmission, setTransmission] = useState("Manual");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!postcode) {
      alert("Please enter a postcode");
      return;
    }
    console.log("Searching with:", { postcode, transmission, date });
  };

  return (
    <section className="dss-section">
      <div className="dss-container">
        {/* Heading */}
        <h2 className="dss-heading">Learn to drive today!</h2>
        <p className="dss-subheading">
          Join over 100,000+ learners driving with EzLicence.
        </p>

        {/* Form */}
        <div className="dss-form">
          {/* Postcode */}
          <div className="dss-field">
            <label className="dss-label">Pick-up Location *</label>
            <input
              type="text"
              placeholder="Enter your postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="dss-input"
            />
          </div>

          {/* Transmission */}
          <div className="dss-field">
            <label className="dss-label">Transmission *</label>
            <select
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="dss-input"
            >
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* Date */}
          <div className="dss-field">
            <label className="dss-label">Test pre-booked?</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="dss-input"
            />
          </div>

          {/* Search Button */}
          <button className="dss-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default DriveSearchSection;
