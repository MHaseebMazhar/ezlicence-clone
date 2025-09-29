import React, { useState } from "react";
import "./LearnersHelp.css";
const LearnersHelp = () => {
  const [searchValue, setSearchValue] = useState("");
  const sections = [
    {
      title: "General Information",
      items: [
        { text: "How many driving lessons do I need?", link: "#" },
        { text: "How to find an instructor where there is no availability", link: "#" },
        { text: "Payment options", link: "#" },
        { text: "How to understand the pricing ranges", link: "#" },
        { text: "What is a Trainee Driving Instructor vs a DVSA approved Driving Instructor?", link: "#" },
        { text: "How to buy a gift voucher", link: "#" },
        { text: "See all 7 articles", link: "#" },
      ],
    },
    {
      title: "Manage Your Account",
      items: [
        { text: "How to log in to your learner account", link: "#" },
        { text: "How to change your preferred gearbox", link: "#" },
        { text: "How to change your preferred pickup address", link: "#" },
        { text: "How to rate your driving instructor", link: "#" },
        { text: "How to add another learner to your account", link: "#" },
        { text: "How to change your notifications", link: "#" },
        { text: "See all 7 articles", link: "#" },
      ],
    },
    {
      title: "Manage Your Bookings",
      items: [
        { text: "How to cancel a booking with your instructor", link: "#" },
        { text: "How to request a late cancellation with your instructor (Less than 48 hrs)", link: "#" },
        { text: "How to change your driving instructor", link: "#" },
        { text: "How to make a new booking with your instructor", link: "#" },
        { text: "How to check my booking", link: "#" },
        { text: "How to reschedule or edit a booking with your instructor", link: "#" },
        { text: "See all 10 articles", link: "#" },
      ],
    },
    {
      title: "Manage Your Payments",
      items: [
        { text: "Your wallet explained", link: "#" },
        { text: "How to add more credit to your wallet", link: "#" },
        { text: "How to view your payment receipt", link: "#" },
        { text: "How to check your wallet balance", link: "#" },
        { text: "How to redeem a gift voucher", link: "#" },
        { text: "How to lodge a dispute", link: "#" },
        { text: "See all 7 articles", link: "#" },
      ],
    },
    {
      title: "EzLicence Policies",
      items: [
        { text: "Learner Terms and Conditions", link: "#" },
        { text: "Booking Modification Policy (Edit, Reschedule and Cancel)", link: "#" },
        { text: "EzLicence Payment Policy", link: "#" },
        { text: "Refund Policy", link: "#" },
      ],
    },
  ];
  
  const HandleSubmitRequest = () => {
    window.location.href = "/submit-request";
  };
   const HandleEzlicenseUK = () => {
    window.location.href = "/support";
  }

  return (
    <> <header className="header-support">
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
          <button className="login-link1"onClick={HandleEzlicenseUK}>EzLicence UK</button>  &gt; Submit a request
        </nav>
    <div className="learners-help-container">
      <h2 className="learners-help-heading">Learners</h2>
      <p className="learners-help-subheading">Information & support for learner drivers</p>
      <div className="learners-help-grid">
        {sections.map((section, idx) => (
          <div className="help-section" key={idx}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>★ {item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LearnersHelp;
