import React, { useState } from "react";
import "./BookLessons.css";
import EzHeader from "../EzHeader/EzHeader";

const BookLessons = () => {
  // Dynamic states
  const [hours] = useState(10);       // default 10 hrs
  const [pricePerHour] = useState(40);          // £40/hr fixed
  const [discountPercent] = useState(5);        // 5% discount
  const [platformFee] = useState(7.6);          // fixed fee

  // Calculations
  const bookingCredit = hours * pricePerHour;
  const discountAmount = (bookingCredit * discountPercent) / 100;
  const totalDue = bookingCredit - discountAmount + platformFee;
  const installment = (totalDue / 4).toFixed(2);
 const HandleBookingform=()=>{
  window.location.href="/booking-form"
 }
  return (
    <> 
      <EzHeader />
      <main className="main1">
    <div className="page-container1">
        {/* Progress Bar */}
             <div className="progress-container">
               {[
                 { step: 1, label: "Instructor" },
                 { step: 2, label: "Amount" },
                 { step: 3, label: "Book your lessons" },
                 { step: 4, label: "Learner Registration" },
                 { step: 5, label: "Payment" },
               ].map((item, index) => (
                 <React.Fragment key={item.step}>
                   <div
                     className={`progress-step ${item.step === 3 ? "active" : ""}`}
                   >
                     <div className="step-circle">{item.step}</div>
                     <div className="step-label">{item.label}</div>
                   </div>
                   {index < 4 && <div className="progress-line"></div>}
                 </React.Fragment>
               ))}
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
                <p>£{pricePerHour}/hr</p>
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

        {/* Right Side - Dynamic Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>{hours} hrs Booking Credit</span>
            <span>£{bookingCredit.toFixed(2)}</span>
          </div>
          <div className="summary-row green1">
            <span>Credit Discount ({discountPercent}% OFF)</span>
            <span>- £{discountAmount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Platform Processing Fee</span>
            <span>£{platformFee.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total Payment Due</span>
            <span>£{totalDue.toFixed(2)}</span>
          </div>
          <p className="installments1">
            Or 4 payments of £{installment}
          </p>
          <button className="btn-primary1" onClick={HandleBookingform}>Book Now</button>
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
      </main>
    </>
  );
};

export default BookLessons;
