import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      
      <nav className="navbar">
        <div className="left-section">
          <div className="logo">
            <img src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li>Driving Lessons</li>
            <li>Test Packages</li>
            <li>Gift Vouchers</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="contact-info">
          <span><img src="/download (2).jpeg" alt="Phone Icon"/></span>
          <span>Call: +44 20 4600 5440</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
