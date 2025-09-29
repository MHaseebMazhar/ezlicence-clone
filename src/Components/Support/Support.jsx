import React, { useState } from "react";
import "./Support.css"; // import simple CSS

export default function Support() {
  const [searchValue, setSearchValue] = useState("");
const [isOpen, setIsOpen] = useState(false);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const HandleEzlicenseUK = () => {
    window.location.href = "/support";
  }

  const HandleFirst = () => {
    window.location.href = "/learners-help";
  }
  const Header = () => (
    <>
      {/* Header */}
      <header className="header-support">
        <div className="logo-container3">
          <img
            src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png"
            alt="EzLicence Logo"
            className="logo3"
          />
        </div>
        <div className="header-right1">
       
          <button
             onClick={HandleSubmitRequest}
            className="login-link1"
          >
            Contact Us
          </button>
        </div>
      </header>
   <div
  className="header2"
  style={{
    backgroundImage: `url("/hero.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="logo-container2">
    <h1 className="header-title">How can we help?</h1>
  </div>
  <div className="search-box">
    <input
      type="text"
      value={searchValue}
      onChange={handleSearchChange}
      placeholder="Search"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="search-icon1"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  </div>
</div>

    </>
  );

  const CategoryCards = () => (
    <div className="categories">
      <div onClick={HandleFirst} className="card1">
        <p>Learners</p>
        <p>Information & support for learner drivers</p>
      </div>
      <div className="card1">
        <p>Driving Instructors</p>
        <p>Information & support for driving instructors</p>
      </div>
    </div>
  );

  const PromotedArticles = () => (
    <div className="articles">
      <h2>Promoted articles</h2>
      <div className="articles-grid">
        {[
          "How many driving lessons do I need?",
          "How to find an instructor where there is no availability",
          "Payment options",
          "How to cancel a booking with your instructor",
          "How to request a late cancellation with your instructor (less than 48 hrs)",
          "How to change your driving instructor",
        ].map((article, index) => (
          <a key={index} href="/">
            {article}
          </a>
        ))}
      </div>
    </div>
  );

   const Footer1 = () => (
    <footer className="footer-support">
      <span className="footer-support-handle" onClick={HandleEzlicenseUK}>EzLicence UK</span>

      {/* Floating Support Button */}
      {!isOpen && (
        <button
          className="support-button"
          onClick={() => setIsOpen(true)}
        >
          
          Support
        </button>
      )}

      {/* Iframe Widget */}
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
  const HandleSubmitRequest = () => {
    window.location.href = "/submit-request";
  }

  return (
    <div className="app">
      <Header />
      <main>
           
        <CategoryCards />
        <PromotedArticles />
      </main>
      <Footer1 />
    </div>
  );
}
