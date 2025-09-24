import React, { useState } from "react";
import "./Amount.css";

const Amount = () => {
  const [selectedHours, setSelectedHours] = useState(20); // ✅ single source of truth

  const pricePerHour = 40; // £40 per hour
  const platformFee = 58.32; // ✅ match screenshot
  const [isOpen, setIsOpen] = useState(false);
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  // Discount rules
  const getDiscountPercent = (hours) => {
    if (hours >= 10 && hours < 20) return 5;
    if (hours >= 20) return 10;
    return 0;
  };
  const handleSelect = (hour) => {
    setSelectedHours(hour);
    setIsOpen(false);
  };
  const HandleContinue = () => {
    // Navigate to the book lessons page
    window.location.href = "/book-lessons";
  };
  const discountPercent = getDiscountPercent(selectedHours);
  const basePrice = selectedHours * pricePerHour;
  const discountAmount = (basePrice * discountPercent) / 100;
  const totalDue = basePrice - discountAmount + platformFee;

  return (
    <div className="app-container">
      {/* Header */}
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

      {/* Main Content */}
      <main className="main">
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
              className={`progress-step ${item.step === 2 ? "active" : ""}`}
            >
              <div className="step-circle">{item.step}</div>
              <div className="step-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="content">
          {/* Left Column */}
          <div className="left-column">
            <div className="card">
              <h1 className="section-title">Choose lesson amount</h1>
              <p className="section-subtitle">Buy more and save!</p>

              {/* Lesson Amount Options */}
              <div className="options">
                <div
                  className={`option ${selectedHours === 20 ? "selected" : ""}`}
                  onClick={() => setSelectedHours(20)}
                >
                  <div className="option-header">
                    <span className="option-title">20 hours</span>
                    <span className="discount">10% OFF</span>
                  </div>
                  <p className="option-desc">
                    Perfect for new learners starting their driving journey from
                    scratch
                  </p>
                </div>

                <div
                  className={`option ${selectedHours === 10 ? "selected" : ""}`}
                  onClick={() => setSelectedHours(10)}
                >
                  <div className="option-header">
                    <span className="option-title">10 hours</span>
                    <span className="discount">5% OFF</span>
                  </div>
                  <p className="option-desc">
                    Ideal for new learners, overseas licence holders, or anyone
                    needing a driving skill refresh.
                  </p>
                </div>
                <div className="option selected">
                  <div
                    className="custom-dropdown-input"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selectedHours
                      ? `${selectedHours} hour${
                          selectedHours > 1 ? "s" : ""
                        }  - ${getDiscountPercent(selectedHours)}% OFF`
                      : "Select custom hours"}
                    <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                  </div>

                  {isOpen && (
                    <div className="custom-dropdown-menu">
                      {Array.from({ length: 99 }, (_, i) => i + 1).map(
                        (hour) => (
                          <div
                            key={hour}
                            className="dropdown-item"
                            onClick={() => handleSelect(hour)}
                          >
                            {hour} hour{hour > 1 ? "s" : ""}{" "}
                            {getDiscountPercent(hour) > 0 &&
                              `- ${getDiscountPercent(hour)}% OFF`}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Tips Section */}
              <div className="tip-box">
                <div className="tip-icon">Tip</div>
                <div className="tip-content">
                  <h3>How many lessons do I need?</h3>
                  <div className="tip-grid">
                    <div>
                      <p className="tip-bold">40+hrs</p>
                      <p className="tip-small">New Learners</p>
                    </div>
                    <div>
                      <p className="tip-bold">6-10hrs</p>
                      <p className="tip-small">Overseas Licence</p>
                    </div>
                    <div>
                      <p className="tip-bold">8-20hrs</p>
                      <p className="tip-small">Refresher Drivers</p>
                    </div>
                    <div>
                      <p className="tip-best">BEST VALUE</p>
                      <p className="tip-small">
                        Beginners starting their driving journey from scratch.
                        Perfect for learning local rules or building confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor Details */}
              <div className="card instructor-card">
                <h2 className="section-title">Instructor Details</h2>
                <div className="instructor-info">
                  <img
                    className="profile-pic"
                    src="/_367_-_ALAM__Nadira_(3)-4c0f8b642e84821d28e9a088aca20ec0.png"
                    alt="Instructor"
                  />
                  <div className="instructor-text">
                    <p className="label">Instructor</p>
                    <p className="value">Nadirah</p>
                    <p className="label">Experience</p>
                    <p className="small">Offers 1 & 2hr lessons</p>
                    <p className="label">Vehicle</p>
                    <p className="value">Toyota Corolla 2022</p>
                    <p className="small">5-star NCAP rating</p>
                    <p className="small">Dual controls fitted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="card">
              <h2 className="section-title">Order Summary</h2>
              <div className="summary-list">
                <div className="summary-item">
                  <span>{selectedHours} hrs Booking Credit</span>
                  <span>{formatCurrency(basePrice)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="summary-item">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="green">
                      - {formatCurrency(discountAmount)}
                    </span>
                  </div>
                )}
                <div className="summary-item">
                  <span>Platform Fee</span>
                  <span>{formatCurrency(platformFee)}</span>
                </div>
              </div>
              <div className="summary-total">
                <span>Total Payment Due</span>
                <span>{formatCurrency(totalDue)}</span>
              </div>
              <p className="installments">
                Or 4 payments of {formatCurrency(totalDue / 4)}
              </p>
              <button className="btn-primary" onClick={HandleContinue}>
                Continue
              </button>
            </div>

            {/* Info Cards */}
            <div className="card info-card">
              <h3>Purchase with peace of mind</h3>
              <p>Our refund policy is hassle-free.</p>
            </div>
            <div className="card info-card">
              <h3>Manage Your Lessons Online</h3>
              <p>24/7 access. Switch instructors anytime at no cost.</p>
            </div>
            <div className="card info-card">
              <h3>Secure Payments</h3>
              <p>We use 256-bit secure payments for your safety.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Amount;
