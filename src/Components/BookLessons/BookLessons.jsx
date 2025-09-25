import React, { useState } from "react";
import "./BookLessons.css";

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
    <> {/* Header */}
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
