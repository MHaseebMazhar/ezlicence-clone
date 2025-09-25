import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [bookingType, setBookingType] = useState("1-Hour Lesson");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    
    <div className="booking-container">
      {/* Header */}
      <div className="booking-header">
        <h1>Book your lessons</h1>
        <p>Book now or later from your dashboard.</p>
      </div>

      <div className="booking-content">
        {/* Left Side Form */}
        <div className="form-card">
          <h2>New Booking</h2>

          {/* Booking Type */}
          <div className="booking-type">
            <button
              className={bookingType === "1-Hour Lesson" ? "active" : ""}
              onClick={() => setBookingType("1-Hour Lesson")}
            >
              1-Hour Lesson
            </button>
            <button
              className={bookingType === "2-Hour Lesson" ? "active" : ""}
              onClick={() => setBookingType("2-Hour Lesson")}
            >
              2-Hour Lesson
            </button>
          </div>

          {/* Dates */}
          <div className="form-section">
            <label>Available Dates</label>
            <select>
              <option>Wed, 8 Oct 2025</option>
            </select>
          </div>

          {/* Times */}
          <div className="form-section">
            <label>Available Times</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select a time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>

          {/* Location */}
          <div className="form-section">
            <label>Lesson Pick Up Location</label>
            <div className="location-box">
              123 Placeholder Street, London, United Kingdom, NW1 6XE
              <button className="edit-btn">Edit</button>
            </div>
            <button className="save-btn">Save</button>
          </div>
        </div>

        {/* Right Side Summary */}
        <div className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>20 hrs Booking Credit</span>
            <span>£800.00</span>
          </div>
          <div className="summary-row discount">
            <span>Credit Discount 10% OFF</span>
            <span>-£80.00</span>
          </div>
          <div className="summary-row fee">
            <span>Platform Processing Fee</span>
            <span>£14.40</span>
          </div>
          <div className="summary-row total">
            <span>Total Payment Due</span>
            <span>£734.40</span>
          </div>
          <p className="payment-alt">Or 4 payments of £183.60</p>

          <button className="disabled-btn">Add Another Booking</button>
          <button className="disabled-btn">Continue</button>

          {/* Payment Options */}
          <div className="payment-options">
            <button className="paypal-btn">Pay in 4 (PayPal)</button>
            <button className="clearpay-btn">Clearpay</button>
          </div>

          {/* Features */}
          <div className="features">
            <div className="feature-item">
              <h4>Purchase with peace of mind</h4>
              <p>Our refund policy is hassle-free.</p>
            </div>
            <div className="feature-item">
              <h4>Manage Your Lessons Online</h4>
              <p>24/7 access. Manage your account. Switch your instructor at no cost.</p>
            </div>
            <div className="feature-item">
              <h4>Secure Payments</h4>
              <p>We use 100% secure payments to provide you with a simple and safe experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
