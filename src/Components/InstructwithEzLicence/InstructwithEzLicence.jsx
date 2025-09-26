import React from "react";
import "./InstructwithEzLicence.css"; 
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Flexibility from "../Flexibility/Flexibility";
import OnboardingSection from "../OnboardingSection/OnboardingSection";
import EzFaqSection from "../EzFaqSection/EzFaqSection";
import Footer from "../Footer/Footer";

const InstructwithEzLicence = () => {
  return (
    <div className="instruct-container1">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section1">
        {/* Left Text Section */}
        <div className="hero-text1">
          <div className="hero-title1">
            Get Bookings With <br /> EzLicence
          </div>

          <div className="hero-buttons1">
            <button className="btn-signup1">Sign up now</button>
            <button className="btn-demo1">Book a demo</button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hero-image1">
          <div className="image-placeholder1">
            <img src="/page-instruct-woman-taking-her-driver-s-license-test-vehicle-825e40779c216c22ca79dd340f3d9aacb5e71797eee24a4ac339632a255eeb94.jpg" alt="Instruct with EzLicence" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="divider1"></div>
      <Flexibility />
      <OnboardingSection />
      <EzFaqSection />
      <Footer />
    </div>
  );
};

export default InstructwithEzLicence;
