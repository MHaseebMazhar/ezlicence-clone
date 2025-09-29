import React from "react";
import { Clock, Car, MapPin, CheckCircle } from "lucide-react";
import "./DrivingPackage.css";

const PackageFeature = ({ icon: Icon, text }) => (
  <li className="dp-feature-item">
    <Icon className="dp-feature-icon" />
    <span>{text}</span>
  </li>
);

const DrivingPackage = () => {
  return (
    <div className="dp-container">
      {/* 1. Header Banner */}
      <header
        className="dp-header-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.png), url(${process.env.PUBLIC_URL}/banner-driving-test-package-6095683a7819a9218327597946c8c977f34bd9c7d5354c17dd5b56022b3d026b.png)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundPosition: "top right",
          backgroundColor: "#1a1a1a",
        }}
      >
        <h1 className="dp-header-title">
          Driving Test & Driving Lesson Packages
        </h1>
        <p className="dp-header-subtitle">Ready for your driving test?</p>
      </header>

      {/* 2. Package Section */}
      <main className="dp-main">
        <div className="dp-card">
          <h2 className="dp-card-title">The Ultimate Driving Test Package</h2>
          <p className="dp-card-tagline">Don't leave your test to chance!</p>
          <p className="dp-card-description">
            Our Driving Test Package gives you everything you need for a smooth,
            stress-free test day:
          </p>

          <div className="dp-content-layout">
            {/* Green "P" Icon */}
            <div className="dp-p-icon-container">
              <div className="dp-p-icon">
                <img src="/p-plate-UK-518d8509ce08e0252b438b5d603ba84b988ccc6e60eafc0fc5af230f51c99b75.png" alt="P Icon" />
              </div>
            </div>

            {/* Features */}
            <ul className="dp-feature-list">
              <PackageFeature
                icon={Clock}
                text={
                  <>
                    <span className="dp-bold">45-minute pre-test warm-up</span>{" "}
                    – shake off nerves & sharpen your skills
                  </>
                }
              />
              <PackageFeature
                icon={Car}
                text={
                  <>
                    <span className="dp-bold">
                      Use of Instructor's car for your test
                    </span>{" "}
                    – fully insured & test-ready
                  </>
                }
              />
              <PackageFeature
                icon={MapPin}
                text={
                  <>
                    <span className="dp-bold">Pick-up & drop-off included</span>{" "}
                    – get to and from your test with zero hassle
                  </>
                }
              />
              <PackageFeature
                icon={CheckCircle}
                text={
                  <>
                    <span className="dp-bold">2.5-hour package</span> – full
                    support from start to finish
                  </>
                }
              />
            </ul>
          </div>

          {/* Footer Note */}
          <p className="dp-footer-note">
            Our test package books the instructor & vehicle only. You must book
            your driving test with the DVSA.
          </p>
        </div>
      </main>

     
    </div>
  );
};

export default DrivingPackage;
