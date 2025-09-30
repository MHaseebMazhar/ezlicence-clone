import React, { useState } from "react";
import "./DrivingLessons.css";
import Topbar from "../../Topbar/Topbar";
import Navbar from "../Navbar";
import DrivingInstructorPage from "./DrivingInstructorPage/DrivingInstructorPage";
import DrivingStats from "./DrivingStats/DrivingStats";
import SearchInstructor from "../../TestPakages/SearchInstructor/SearchInstructor";
import InstructorSlider from "../DrivingLessons/InstructorSlider/InstructorSlider";
import EzLicenceProcess from "../DrivingLessons/EzLicenceProcess/EzLicenceProcess";
import FeaturedLogos from "../DrivingLessons/FeaturedLogos/FeaturedLogos";
import DrivingWhyChooseSection from "./DrivingWhyChooseSection/DrivingWhyChooseSection";
import Footer from "../../Footer/Footer";
export default function DrivingLessons() {
  const [transmissionType, setTransmissionType] = useState("auto");
  const [postcode, setPostcode] = useState("");

  // Determine city: prefer sessionStorage (set by navbar), then query string, then default
  let cityFromQuery = "London";
  try {
    const stored = sessionStorage.getItem("selectedCity");
    if (stored) {
      cityFromQuery = stored;
    } else {
      const params = new URLSearchParams(window.location.search);
      cityFromQuery = params.get("city") || "London";
    }
  } catch (e) {
    const params = new URLSearchParams(window.location.search);
    cityFromQuery = params.get("city") || "London";
  }

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="dlp-container">
        {/* Header */}
        <div className="dlp-header">
          <nav className="dlp-nav">
            <span className="dlp-nav-item">Home</span>
            <span className="dlp-nav-separator">›</span>
            <span className="dlp-nav-item">
              Driving School, Driving Lessons & Instructors
            </span>
            <span className="dlp-nav-separator">›</span>
            <span className="dlp-nav-item">England</span>
            <span className="dlp-nav-separator">›</span>
            <span className="dlp-nav-item dlp-active">{cityFromQuery}</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="dlp-main">
          {/* Left Section */}
          <div className="dlp-left">
            <h1 className="dlp-title">
              Driving lessons in <br />
              <span className="dlp-title-bold">{cityFromQuery}</span>
            </h1>
            <p className="dlp-subtitle">
              Find and book certified driving instructors on EzLicence
            </p>

            <div className="dlp-card">
              {/* Transmission Toggle */}
              <div className="dlp-toggle">
                <button
                  className={`dlp-toggle-btn ${
                    transmissionType === "auto" ? "dlp-active-btn" : ""
                  }`}
                  onClick={() => setTransmissionType("auto")}
                >
                  <span className="dlp-check">✓</span> Auto
                </button>
                <button
                  className={`dlp-toggle-btn ${
                    transmissionType === "manual" ? "dlp-active-btn" : ""
                  }`}
                  onClick={() => setTransmissionType("manual")}
                >
                  Manual
                </button>
              </div>

              {/* Input */}
              <div className="dlp-input-group">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="dlp-input"
                />
              </div>

              {/* Search Button */}
              <button className="dlp-search-btn">
                <span style={{ fontSize: "18px" }}>🔍</span> Search
              </button>
            </div>

            {/* Google Review */}
            <div className="dlp-google-review">
              <svg className="dlp-google-icon" viewBox="0 0 48 48">
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#EA4335"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              <div>
                <div className="dlp-review-text">
                  Rated <strong>4.9</strong> from <strong>9,700</strong> Google
                  reviews
                </div>
                <div className="dlp-stars">★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="dlp-right">
            <svg
              className="dlp-arrow"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20,80 Q50,20 80,60"
                stroke="#FFC107"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M80,60 L75,55 M80,60 L85,58"
                stroke="#FFC107"
                strokeWidth="3"
                fill="none"
              />
            </svg>

            <div className="dlp-img-box">
              <img
                src="/location_page_learner_driving-60589d5b7b84684aee6fd135bcc0dabef0fef3c488b35a6427ae38f20e1ec5f2.png"
                alt="Happy woman learning to drive"
                className="dlp-img"
              />
            </div>
          </div>
        </div>
      </div>
      <DrivingStats />
      <DrivingInstructorPage />
      <SearchInstructor />
      <InstructorSlider />
      <EzLicenceProcess />
      <FeaturedLogos />
      <DrivingWhyChooseSection />
      <Footer />
    </>
  );
}
