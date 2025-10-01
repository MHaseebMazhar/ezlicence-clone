import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "./BookingForm.css";
import EzHeader from "../EzHeader/EzHeader";
const BookingForm = () => {
  const [lessonType, setLessonType] = useState("1-hour");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("123 Placeholder Street, London, NW1 6XE");

  const navigate = useNavigate(); // hook for navigation

  const handleContinue = () => {
    if (date && time) {
      // Navigate to next page
      navigate("/learner-registration"); 
    }
  };

  return (
    <>  
      <EzHeader />
      <div className="page-container">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-line"></div>
          {[
            { step: 1, label: "Instructor" },
            { step: 2, label: "Amount" },
            { step: 3, label: "Book your lessons" },
            { step: 4, label: "Learner Registration" },
            { step: 5, label: "Payment" },
          ].map((item) => (
            <div
              key={item.step}
              className={`progress-step ${item.step === 3 ? "active" : ""}`}
            >
              <div className="step-circle">{item.step}</div>
              <div className="step-label">{item.label}</div>
            </div>
          ))}
        </div>

        <h2>Book your lessons</h2>
        <p className="subtitle">Book now or later from your dashboard.</p>

        <div className="content">
          {/* Left Form */}
          <div className="form-card">
            <div className="section">
              <div className="lesson-type">
                <button
                  className={lessonType === "1-hour" ? "active" : ""}
                  onClick={() => setLessonType("1-hour")}
                >
                  1-Hour Lesson
                </button>
                <button
                  className={lessonType === "2-hour" ? "active" : ""}
                  onClick={() => setLessonType("2-hour")}
                >
                  2-Hour Lesson
                </button>
              </div>

              <div className="row">
                <select value={date} onChange={(e) => setDate(e.target.value)}>
                  <option value="">Select a day</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                </select>

                <select value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Select a time</option>
                  <option value="10am">10:00 AM</option>
                  <option value="2pm">2:00 PM</option>
                </select>
              </div>

              <div className="location">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="edit-btn">Edit</button>
              </div>

              <button className="save-btn">Save</button>
            </div>
          </div>

          {/* Right Summary */}
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-item">
              <span>20 hrs Booking Credit</span>
              <span>£800.00</span>
            </div>

            <div className="summary-item discount">
              <span>
                Credit Discount <span className="tag">10% OFF</span>
              </span>
              <span>- £80.00</span>
            </div>

            <div className="summary-item">
              <span>Platform Processing Fee</span>
              <span>£14.40</span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total Payment Due</strong>
              <strong>£734.40</strong>
            </div>

            <p className="installments">Or 4 payments of £183.60</p>

            <button className="disabled-btn">Add Another Booking</button>

            {/* ✅ Continue Button Active Only If Date & Time Selected */}
            <button
              className={`continue-btn ${date && time ? "active" : "disabled-btn"}`}
              disabled={!date || !time}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
