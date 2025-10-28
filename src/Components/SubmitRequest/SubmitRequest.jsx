import React, { useState, useEffect } from "react";
import "./SubmitRequest.css";

const SubmitRequest = () => {
  const [selectedOption, setSelectedOption] = useState("-");
  const [searchValue, setSearchValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "-",
    "I am learning to drive",
    "I am a Driving Instructor",
    "I am a Driving Instructor interested in joining EzLicence",
    "I have a Media / PR enquiry",
  ];

  // ✅ Check source on mount
  useEffect(() => {
    const cameFromContact = localStorage.getItem("fromContactUs");
    if (cameFromContact) {
      // from "Contact Us"
      setSelectedOption("-");
      localStorage.removeItem("fromContactUs");
    } else {
      // direct visit or from other pages
      setSelectedOption("I am learning to drive");
    }
  }, []);

  const HandleSubmitRequest = () => {
    localStorage.setItem("fromContactUs", "true");
    window.location.href = "/submit-request";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const HandleEzlicenseUK = () => {
    window.location.href = "/support";
  };

  const Footer1 = () => (
    <footer className="footer-support">
      <span className="footer-support-handle" onClick={HandleEzlicenseUK}>
        EzLicence UK
      </span>

      {!isOpen && (
        <button className="support-button" onClick={() => setIsOpen(true)}>
          Support
        </button>
      )}

      {isOpen && (
        <div className="iframe-container">
          <iframe
            title="Support Options"
            id="webWidget"
            srcDoc={`<!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 16px;
                      background: #f3f3f3ff;
                    }
                    h2 {
                      font-size: 18px;
                      margin-bottom: 12px;
                      color: #333;
                    }
                    ul {
                      list-style: none;
                      padding: 0;
                    }
                    li {
                      margin-bottom: 10px;
                    }
                    button {
                      width: 100%;
                      padding: 12px;
                      border: 1px solid #ccc;
                      border-radius: 6px;
                      background: #f9f9f9;
                      cursor: pointer;
                      transition: all 0.2s ease-in-out;
                    }
                    button:hover {
                      background: #222;
                      color: white;
                    }
                  </style>
                </head>
                <body>
                  <h2>Please select your issue</h2>
                  <ul>
                    <li><button>I am learning to drive</button></li>
                    <li><button>I am a Driving Instructor</button></li>
                    <li><button>I am a Driving Instructor interested in joining EzLicence</button></li>
                    <li><button>I have a Media / PR enquiry</button></li>
                  </ul>
                </body>
              </html>`}
          />
          <button className="iframe-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
      )}
    </footer>
  );

  return (
    <>
      {showMessage && <div className="success-message">Successfully Submitted</div>}

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
          <button className="login-link1" onClick={HandleEzlicenseUK}>
            EzLicence UK
          </button>{" "}
          &gt; Submit a request
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

        {/* ✅ Conditional Form Rendering */}
        {[
          "I am learning to drive",
          "I am a Driving Instructor",
          "I am a Driving Instructor interested in joining EzLicence",
          "I have a Media / PR enquiry",
        ].includes(selectedOption) && (
          <form className="submit-request-form" onSubmit={handleFormSubmit}>
            <label>Email address</label>
            <input type="email" className="form-input" placeholder="Your email address" required />

            <label>First name</label>
            <input type="text" className="form-input" placeholder="First name" required />

            <label>Surname</label>
            <input type="text" className="form-input" placeholder="Surname" />

            <label>Mobile phone number</label>
            <input type="tel" className="form-input" placeholder="Mobile phone number" />

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
            <input type="text" className="form-input" placeholder="Subject or topic" />

            <label>
              Tell us more, providing as much detail as you can will allow us to help you as quickly as possible. *
            </label>
            <textarea className="form-input textarea" rows="5" placeholder="Write your message here" required></textarea>

            <label>Attachments (optional)</label>
            <input type="file" className="form-input-file" />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>

      <Footer1 />
    </>
  );
};

export default SubmitRequest;
