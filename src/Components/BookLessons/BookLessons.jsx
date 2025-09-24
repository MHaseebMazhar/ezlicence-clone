import React from "react";
import "./BookLessons.css";

const BookLessons = () => {
  return (
    <div className="page-container1">
      {/* Progress Steps */}
      <div className="progress-bar">
        <div className="step1 completed1">Instructor</div>
        <div className="step1 completed1">Amount</div>
        <div className="step1 active">Book your lessons</div>
        <div className="step1">Learner Registration</div>
        <div className="step1">Payment</div>
      </div>

      <h2 className="page-title">Book your lessons</h2>
      <p className="subtitle1">Book now or later from your dashboard.</p>

      <div className="main-layout">
        {/* Left Side */}
        <div className="left-section1">
          {/* Lesson Card */}
          <div className="lesson-card">
            <h3>Book Driving Lesson</h3>
            <div className="lesson-details">
              <div className="lesson-col">
                <p className="label">Instructor</p>
                <p className="bold">Nadira</p>
                <p>£40/hr</p>
                <p>Offers 1 & 2hr lessons</p>
              </div>
              <div className="lesson-col">
                <p className="label">Vehicle</p>
                <p className="bold">Toyota Corolla 2022</p>
                <p>5-star NCAP rating</p>
                <p>Dual controls fitted</p>
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="tip-box1">
            <p>
              <b>Tip</b> — Book all your lessons upfront to avoid price changes!
              <br />
              Lock in your preferred times now. You can reschedule bookings up to
              24 hours before lesson start time.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>10 hrs Booking Credit</span>
            <span>£400.00</span>
          </div>
          <div className="summary-row green1">
            <span>Credit Discount (5% OFF)</span>
            <span>- £20.00</span>
          </div>
          <div className="summary-row">
            <span>Platform Processing Fee</span>
            <span>£7.60</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total Payment Due</span>
            <span>£387.60</span>
          </div>
          <p className="installments1">Or 4 payments of £96.90</p>
          <button className="btn-primary1">Book Now</button>
          <button className="btn-secondary">Book Later</button>

          <div className="extra-info">
            <p>
              <b>Purchase with peace of mind</b>
              <br />
              Our refund policy is hassle-free.
            </p>
            <p>
              <b>Manage Your Lessons Online</b>
              <br />
              24/7 access. Manage your account. Switch instructors at no cost.
            </p>
            <p>
              <b>Secure Payments</b>
              <br />
              We use 100% secure payments for a simple and safe experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLessons;
