import React, { useState } from "react";
import "./SubmitRequest.css";

const SubmitRequest = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const options = [
    "-",
    "I am learning to drive",
    "I am a Driving Instructor",
    "I am a Driving Instructor interested in joining EzLicence",
    "I have a Media / PR enquiry",
  ];

  const HandleSubmitRequest = () => {
    window.location.href = "/submit-request";
  };

  return (
    <>
      <header className="header-support">
        <div className="logo-container3">
          <img
            src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png"
            alt="EzLicence Logo"
            className="logo3"
          />
        </div>
        <div className="header-right1">
          <button onClick={HandleSubmitRequest} className="login-link1">
            Contact Us
          </button>
        </div>
      </header>

      <div className="submit-request-container">
        {/* 🔍 Search input */}
        <div className="submit-request-search">
          
          <input
            type="text"
            className="search-input"
            placeholder="🔍  Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <nav className="submit-request-breadcrumb">
          EzLicence UK &gt; Submit a request

        </nav>

        <h1 className="submit-request-title">Submit a request</h1>
        <label htmlFor="userType" className="submit-request-label">
          Which best describes you?
        </label>

        <select
          id="userType"
          className="submit-request-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>


        {/* Conditional Form */}
        {[
          "I am learning to drive",
          "I am a Driving Instructor",
          "I am a Driving Instructor interested in joining EzLicence",
          "I have a Media / PR enquiry",
        ].includes(selectedOption) && (
          <form className="submit-request-form">
            <label>Email address</label>
            <input
              type="email"
              className="form-input"
              placeholder="Your email address"
            />

            <label>First name</label>
            <input
              type="text"
              className="form-input"
              placeholder="First name"
            />

            <label>Surname</label>
            <input type="text" className="form-input" placeholder="Surname" />

            <label>Mobile phone number</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Mobile phone number"
            />

            <label>Please select your type of enquiry</label>
            <select className="form-input">
              <option>-</option>
              <option>Enquiry and information</option>
              <option>My account</option>
              <option>My bookings </option>
              <option>My payments</option>
              <option>Lodge a dispute</option>
              <option>Provide feedback</option>
            </select>

            <label>Subject or topic (optional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Subject or topic"
            />

            <label>
              Tell us more, providing as much detail as you can will allow us to
              help you as quickly as possible. *
            </label>
            <textarea
              className="form-input textarea"
              rows="5"
              placeholder="Write your message here"
            ></textarea>

            <label>Attachments (optional)</label>
            <input type="file" className="form-input-file" />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
      {/* ✅ Footer */}
      <footer className="submit-request-footer">
       
        <div className="footer-links">
          <a href="/Home">EzLicence UK</a>
             </div>
      </footer>
    </>
  );
};

export default SubmitRequest;
