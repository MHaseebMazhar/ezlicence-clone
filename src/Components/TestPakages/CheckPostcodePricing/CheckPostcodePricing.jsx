import React, { useState } from 'react';
import { Search, Check, PoundSterling, ChevronDown } from 'lucide-react';
import './CheckPostcodePricing.css';

const CheckPostcodePricing = () => {
  const [transmission, setTransmission] = useState('Manual'); 
  const [postcode, setPostcode] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState('');

  const isAutoActive = transmission === 'Auto';
  const isManualActive = transmission === 'Manual';

  // UK postcode regex
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

  const handleSearch = () => {
    if (postcode.trim() === '') {
      setError('Please enter a postcode');
    } else if (!postcodeRegex.test(postcode.toUpperCase())) {
      setError('Please enter a valid UK postcode');
    } else {
      setError('');
      console.log(`Checking pricing for ${transmission} in postcode: ${postcode}`);
    }
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value.toUpperCase()); 
    if (e.target.value.trim() !== '') {
      setError('');
    }
  };

  return (
    <div className="cpp-app">

      {/* Main Yellow Banner */}
      <div className="cpp-banner">
        <div className="cpp-container">
          <div className="cpp-grid">
            
            {/* Left Section */}
            <div className="cpp-left">
              <div className="cpp-left-inner">
                <PoundSterling className="cpp-icon" strokeWidth={1.5} />
                <div>
                  <h2 className="cpp-heading">
                    Driving lessons <br />& test packages
                  </h2>
                  <p className="cpp-subheading">
                    Buy more lessons & get more discount
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="cpp-form">
              <p className="cpp-form-title">
                <Search className="cpp-form-icon" />
                Check postcode pricing
              </p>

              <div className="cpp-form-content">
                
                {/* Transmission Toggle */}
                <div className="cpp-toggle" role="group" aria-label="Transmission type">
                  <button
                    className={`cpp-toggle-btn ${isAutoActive ? 'active' : ''}`}
                    onClick={() => setTransmission('Auto')}
                    aria-pressed={isAutoActive}
                  >
                    {isAutoActive && <Check className="cpp-check" />}
                    Auto
                  </button>
                  
                  <button
                    className={`cpp-toggle-btn ${isManualActive ? 'active' : ''}`}
                    onClick={() => setTransmission('Manual')}
                    aria-pressed={isManualActive}
                  >
                    {isManualActive && <Check className="cpp-check" />}
                    Manual
                  </button>
                </div>

                {/* Postcode Input + Search */}
                <div className="cpp-input-row">
                  <div className="cpp-input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter your postcode"
                      value={postcode}
                      onChange={handlePostcodeChange}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      className={`cpp-input ${error ? 'error' : ''} ${isInputFocused ? 'focus' : ''}`}
                      aria-label="Postcode"
                      aria-invalid={!!error}
                      aria-describedby={error ? "postcode-error" : undefined}
                    />
                    <ChevronDown className="cpp-dropdown-icon" />
                  </div>

                  <button
                    onClick={handleSearch}
                    className="cpp-search-btn"
                  >
                    Search
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div id="postcode-error" className="cpp-error-box">
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default CheckPostcodePricing;
