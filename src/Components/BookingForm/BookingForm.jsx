import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [lessonType, setLessonType] = useState("1-hour");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("123 Placeholder Street, London, NW1 6XE");

  return (
    <>  {/* Header */}
      <header className="header">
        <div className="logo-container3">
          <img
            src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png"
            alt="EzLicence Logo"
            className="logo3"
          />
        </div>
        <div className="header-right">
       <svg width="16" height="18" viewBox="0 0 16 18" fill="none" color="#475467" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6654 16.5C14.6654 15.337 14.6654 14.7555 14.5218 14.2824C14.1987 13.217 13.365 12.3834 12.2996 12.0602C11.8265 11.9167 11.245 11.9167 10.082 11.9167H5.91537C4.7524 11.9167 4.17091 11.9167 3.69775 12.0602C2.63241 12.3834 1.79873 13.217 1.47556 14.2824C1.33203 14.7555 1.33203 15.337 1.33203 16.5M11.7487 5.25C11.7487 7.32107 10.0698 9 7.9987 9C5.92763 9 4.2487 7.32107 4.2487 5.25C4.2487 3.17893 5.92763 1.5 7.9987 1.5C10.0698 1.5 11.7487 3.17893 11.7487 5.25Z" stroke="currentColor"stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          <a
            href="https://www.ezlicence.co.uk/learner/purchase-step/booking_credit"
            className="login-link"
          >
            Log In
          </a>
        </div>
      </header>
      
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
          <button className="disabled-btn">Continue</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingForm;
