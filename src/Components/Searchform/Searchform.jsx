import React from 'react';
import './Searchform.css';

const Searchform = () => {
  return (
    <div className="search-form-container">
      <div className="form-group">
        <label htmlFor="location">Pick-up Location </label>
        <div className="input-with-icon">
          <input type="text" id="location" placeholder="Enter your postcode" />
          <span className="icon">▼</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transmission">Transmission </label>
        <div className="input-with-icon">
          <select id="transmission">
            <option>Auto</option>
            <option>Manual</option>
          </select>
          <span className="icon">▼</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="test-date">Test pre-booked?</label>
        <div className="input-with-icon">
          <input type="date" id="test-date" placeholder="Select date" />
          <span className="icon">▼</span>
        </div>
      </div>

      <button className="search-button">
        <span className="search-icon">🔍</span> Search
      </button>
    </div>
  );
};

export default Searchform;