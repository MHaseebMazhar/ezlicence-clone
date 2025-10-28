import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchform.css";

const Searchform = () => {
  const [postcode, setPostcode] = useState("");
  const [testDate, setTestDate] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (postcode && testDate) {
      navigate("/results", { state: { postcode, testDate } });
    }
  };

  // UK postcode suggestions fetch
  const fetchSuggestions = async (value) => {
    setPostcode(value);

    if (value.length > 2) {
      try {
        const res = await fetch(
          `https://api.postcodes.io/postcodes/${value}/autocomplete`
        );
        const data = await res.json();

        if (data?.result) {
          setSuggestions(data.result);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-form-container">
      {/* Location */}
      <div className="form-group">
        <label htmlFor="location">Pick-up Location</label>
        <div className="input-with-icon">
          <input
            type="text"
            id="location"
            placeholder="Enter your postcode"
            value={postcode}
            onChange={(e) => fetchSuggestions(e.target.value)}
            autoComplete="on"
            required
          />
          <span className="icon1">▼</span>
        </div>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestion-box">
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setPostcode(item);
                  setSuggestions([]);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Transmission */}
      <div className="form-group">
        <label htmlFor="transmission">Transmission</label>
        <div className="input-with-icon">
          <select id="transmission">
            <option>Auto</option>
            <option>Manual</option>
          </select>
          <span className="icon1">▼</span>
        </div>
      </div>

      {/* Date */}
      <div className="form-group">
        <label htmlFor="test-date">Test pre-booked?</label>
        <div className="input-with-icon">
          <input
            type="date"
            id="test-date"
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
          />
          <span className="icon1">▼</span>
        </div>
      </div>

      {/* Search Button */}
      <button
        className="search-button"
        onClick={handleSearch}
        disabled={!postcode || !testDate}
      >
        <span className="search-icon">🔍</span> Search
      </button>
    </div>
  );
};

export default Searchform;
