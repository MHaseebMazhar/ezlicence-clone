import React from "react";
import {Link, useLocation } from "react-router-dom";
import "./Result.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
const Results = () => {
  const location = useLocation();
  const { postcode, testDate } = location.state || {};

  const instructors = [
    {
      id: 1,
      name: "Nadira",
      experience: "Instructed for 17 yr. 3 mo.",
      approved: "DVSA Approved Instructor",
      price: "£40.00/hr",
      image: "/_367_-_ALAM__Nadira_(3)-4c0f8b642e84821d28e9a088aca20ec0.png",
      car: "/temp20231128-2993811-ptlh22-353841ace556861670ef1f886ea9c8ad.png"
    },
    {
      id: 2,
      name: "Ali",
      experience: "Instructed for 10 yr. 5 mo.",
      approved: "DVSA Approved Instructor",
      price: "£42.00/hr",
      image: "/Untitled_design_-_2025-04-30T234808.365-4e6fbf5b8e6b25af27d30d0cb0a75f39.png",
      car: "/temp20231128-2993811-ptlh22-353841ace556861670ef1f886ea9c8ad.png"
    },
  ];

  return (
     <>
      <Topbar/>
      <Navbar/>
      <div className="results-container">
        <h2>{instructors.length} Auto Instructors Available</h2>
        <p className="subtitle">from £40.00/hr</p>

        {postcode && testDate && (
          <p className="search-info">
            Search for <b>{postcode}</b> on <b>{testDate}</b>
          </p>
        )}

        <div className="instructor-list">
          {instructors.map((ins) => (
            <div key={ins.id} className="instructor-card">
              <div className="images">
                <img src={ins.image} alt={ins.name} className="instructor-img" />
                <img src={ins.car} alt="Car" className="car-img" />
              </div>
              <h3>{ins.name}</h3>
              <p>{ins.experience}</p>
              <p>{ins.approved}</p>
              <p className="price">{ins.price}</p>
              <button className="book-btn">Book Online Now</button>
              <div className="card-actions">
                {/* Use Link to navigate to the new profile page */}
                <Link to={`/profile/${ins.id}`} className="action-btn">
                  View Profile
                </Link>
                <button className="action-btn">Availability</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Results;
