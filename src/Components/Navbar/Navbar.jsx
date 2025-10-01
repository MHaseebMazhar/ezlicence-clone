import React, { useState } from "react";
import "./Navbar.css";

const DrivingPricingAndPackages = () => {
  window.location.href = "/driving-pricing-and-packages";
};
const HandleGiftVouchers = () => {
  window.location.href = "/gift-vouchers";
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const HandleDrivingCity = (city) => {
    // Store the selected city in sessionStorage so the next page can read it
    try {
      sessionStorage.setItem("selectedCity", city);
    } catch (e) {
      // ignore storage errors
    }
    // Navigate to driving lessons page without exposing the city in the URL
    window.location.href = "/driving-lessons";
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <div className="logo" onClick={() => (window.location.href = "/")}>
            <img
              src="/SilentSolhd-1.png"
              alt="Logo"
            />
          </div>
          <ul className="nav-links">
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Driving Lessons
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => HandleDrivingCity("London")}>
                    London Driving Lessons
                  </li>
                  <li onClick={() => HandleDrivingCity("Wembley")}>
                    Wembley Driving Lessons
                  </li>
                  <li onClick={() => HandleDrivingCity("Bristol")}>
                    Bristol Driving Lessons
                  </li>
                  <li onClick={() => HandleDrivingCity("Oxford")}>
                    Oxford Driving Lessons
                  </li>
                  <li onClick={() => HandleDrivingCity("Sheffield")}>
                    Sheffield Driving Lessons
                  </li>
                  <li onClick={() => HandleDrivingCity("Nottingham")}>
                    Nottingham Driving Lessons
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => (window.location.href = "/test-packages")}>
              Test Packages
            </li>
            <li onClick={HandleGiftVouchers}>Gift Vouchers</li>
            <li onClick={DrivingPricingAndPackages}>Pricing</li>
          </ul>
        </div>

        {/* WhatsApp clickable number */}
        <div className="contact-info">
          <a href="https://wa.me/442046005440" className="whatsapp-link">
            <img src="/download (2).jpeg" alt="Phone Icon" />
            <span>Call: +44 20 4600 5440</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
