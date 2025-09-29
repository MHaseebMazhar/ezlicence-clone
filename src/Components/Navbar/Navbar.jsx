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

 
  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <div className="logo" onClick={() => (window.location.href = "/")}>
            <img
              src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png"
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
                  <li onClick={() => (window.location.href = "/driving-lessons")}>London Driving Lessons</li>
                  <li>Wembley Driving Lessons</li>
                  <li>Bristol Driving Lessons</li>
                  <li>Oxford Driving Lessons</li>
                  <li>Sheffield Driving Lessons</li>
                  <li>Nottingham Driving Lessons</li>
                </ul>
              )}
            </li>
            <li onClick={()=>(window.location.href = "/test-packages")}>Test Packages</li>
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
