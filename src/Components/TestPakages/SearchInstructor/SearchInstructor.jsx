import React, { useState } from "react";
import { Check } from "lucide-react";
import "./SearchInstructor.css"; // unique CSS file

const SearchInstructor = () => {
  const [transmission, setTransmission] = useState("Auto");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    if (postcode.trim() === "") {
      setError("Please enter a postcode");
      setIsInputFocused(true);
    } else if (postcode.trim().length < 4) {
      setError("Postcode must be at least 4 characters");
      setIsInputFocused(true);
    } else {
      setError("");
      console.log(`Searching for ${transmission} instructors near: ${postcode}`);
    }
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
      setIsInputFocused(false);
    }
  };

  const handleInputFocus = () => {
    if (!error) setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    if (!error) setIsInputFocused(false);
  };

  const isAutoActive = transmission === "Auto";
  const isManualActive = transmission === "Manual";

  return (
    <div className="si-app-container">
      {/* Header */}
      <div className="si-header">
        <h1 className="si-title">
          Search for an instructor to book a Driving Test Package with driving
          lessons
        </h1>
        <p className="si-subtitle">
          Discover local driving instructors, convenient, hassle-free, search in
          your area
        </p>
      </div>

      {/* Search Section */}
      <div className="si-bg-section">
        <div className="si-search-box">
          <div className="si-search-row">
            {/* Transmission Selector */}
            <div className="si-selector-group">
              <button
                className={`si-tab ${isAutoActive ? "si-active" : "si-inactive"}`}
                onClick={() => setTransmission("Auto")}
                aria-pressed={isAutoActive}
                disabled={isAutoActive}
              >
                <span className="si-tab-content">
                  {isAutoActive && <Check className="si-check-icon" />}
                  Auto
                </span>
              </button>

              <button
                className={`si-tab ${isManualActive ? "si-active" : "si-inactive"}`}
                onClick={() => setTransmission("Manual")}
                aria-pressed={isManualActive}
                disabled={isManualActive}
              >
                Manual
              </button>
            </div>

            {/* Postcode Input */}
            <div className="si-input-wrapper">
              <input
                type="text"
                placeholder="Enter your postcode"
                value={postcode}
                onChange={handlePostcodeChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={`si-input ${error ? "si-error-input" : ""}`}
                aria-invalid={!!error}
                aria-describedby={error ? "postcode-error" : undefined}
              />

              {(error || isInputFocused) && (
                <div
                  className={`si-error-box ${error ? "si-error-border" : ""}`}
                >
                  <p
                    id="postcode-error"
                    className={`si-error-text ${
                      error ? "si-error-text-active" : ""
                    }`}
                  >
                    {error || "Please enter a postcode"}
                  </p>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button onClick={handleSearch} className="si-search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInstructor;
