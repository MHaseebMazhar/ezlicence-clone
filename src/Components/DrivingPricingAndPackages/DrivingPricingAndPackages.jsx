import React, { useState } from "react";
import "./DrivingPricingAndPackages.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import HowItWorks from "../HowItWorks/HowItWorks";
import DrivingTestPackage from "../DrivingTestPackage/DrivingTestPackage";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import GiftVoucherSection from "../GiftVoucherSection/GiftVoucherSection";
import DrivingLessonsSection from "../DrivingLessonsSection/DrivingLessonsSection";
import WhyChoose from "../WhyChoose/WhyChoose";
import Footer from "../Footer/Footer";
const CarImage = () => (
  <div className="dpp-carMockup">
    <img src="/Car.png" alt="Car" className="dpp-carImage" />
  </div>
);


const DrivingPricingAndPackages = () => {
  const [lessonType, setLessonType] = useState("Manual");
  const [postcode, setPostcode] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for prices in postcode: ${postcode} for ${lessonType} lessons.`
    );
  };

  return (
    <>
    <Topbar />
    <Navbar />
    <div className="dpp-container">
      <h1 className="dpp-headerTitle">Driving Lesson Pricing & Packages</h1>

      <div className="dpp-checkBlock">
        <div className="dpp-checkPrompt">
          <svg className="dpp-searchIcon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 
              11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 
              5.91 3 9.5 5.91 16 9.5 16c1.61 0 
              3.09-.59 4.23-1.57l.27.28v.79l5 
              4.99L20.49 19l-4.99-5zm-6 
              0C7.01 14 5 11.99 5 9.5S7.01 
              5 9.5 5 14 7.01 14 9.5 11.99 
              14 9.5 14z"/>
          </svg>
          Check postcode pricing
        </div>

        <div className="dpp-inputGroup">
          <button
            className={`dpp-typeButton ${
              lessonType === "Auto" ? "dpp-typeButtonActive" : ""
            }`}
            onClick={() => setLessonType("Auto")}
          >
            <span className="dpp-checkmark">✓</span>
            Auto
          </button>

          <button
            className={`dpp-typeButton ${
              lessonType === "Manual" ? "dpp-typeButtonActive" : ""
            }`}
            onClick={() => setLessonType("Manual")}
          >
            <span className="dpp-checkmark">✓</span> Manual
          </button>

          <input
            type="text"
            placeholder="Enter your postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="dpp-postcodeInput"
          />

          <button
            className="dpp-searchButton"
            onClick={handleSearch}
            disabled={postcode.length < 3}
          >
            Search
          </button>
        </div>
      </div>

      <div className="dpp-contentLayout">
        <div className="dpp-leftColumn">
          <CarImage />
        </div>

        <div className="dpp-rightColumn">
          <ul className="dpp-featureList">
            <li>
              <span className="dpp-checkmark">✓</span> 100,000+ new learners
              globally
            </li>
            <li>
              <span className="dpp-checkmark">✓</span> 24/7 online booking &
              rescheduling
            </li>
            <li>
              <span className="dpp-checkmark">✓</span> Change your instructor
              anytime
            </li>
          </ul>

          <div className="dpp-reviewBlock">
            <div className="dpp-googleIcon">G</div>
            <div className="dpp-ratingInfo">
              <p>Rated **4.9** from 9,700 Google reviews</p>
              <div className="dpp-starRating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HowItWorks />
 
    <TestimonialSlider />
    <DrivingTestPackage />
    <GiftVoucherSection />
    <DrivingLessonsSection />
    <WhyChoose />
    <Footer />
    </>
  );
};

export default DrivingPricingAndPackages;
