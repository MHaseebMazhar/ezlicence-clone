import React from "react";
import "./GiftVoucherProcess.css";

// Data structure for the steps in the process
const steps = [
  {
    id: 1,
    title: "Choose the occasion",
    details: "Choose a gift voucher design for your recipient.",
  },
  {
    id: 2,
    title: "Choose the delivery method",
    details:
      "Send your gift to your recipient via email or SMS. Choose to print your gift to deliver personally.",
  },
  {
    id: 3,
    title: "Select the amount you want to gift",
    details: "Gift any amount of EzLicence credit to be used on driving lessons.",
  },
  {
    id: 4,
    title: "Personal message",
    details: "Add your name and a personalised message to your gift voucher.",
  },
  {
    id: 5,
    title: "Review your gift",
    details: (
      <>
        Preview how your gift is presented to the recipient.{" "}
        <a href="/" className="gvp-link">
          View an example.
        </a>
      </>
    ),
  },
  {
    id: 6,
    title: "Checkout",
    details:
      "Purchase your gift voucher by entering your payment details. A receipt will be emailed to you.",
  },
  {
    id: 7,
    title: "Gift voucher will be sent",
    details: (
      <ul className="gvp-list">
        <li>Email/SMS: Your gift will be sent on the date selected.</li>
        <li>Print: Your gift will be emailed to you as a PDF ready to print.</li>
      </ul>
    ),
  },
  {
    id: 8,
    title: "Recipient redeems their gift",
    details:
      "Your recipient is invited to redeem their gift online via the website link in the email/SMS or by scanning the printed QR code. Your recipient can then choose their own instructor and book their lesson(s) online.",
  },
];

const GiftVoucherProcess = () => {
  return (
    <div className="gvp-container">
      <div className="gvp-wrapper">
        {/* Left Sidebar / Action Block */}
        <div className="gvp-sidebar">
          <div className="gvp-sidebar-content">
            <h2 className="gvp-title">How does it work?</h2>
            <p className="gvp-subtitle">To get started select:</p>

            {/* Gift Box Icon */}
            <div className="gvp-icon-wrapper">
              <div className="gvp-icon">
                <span role="img" aria-label="Gift Box">
                  🎁
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <button className="gvp-button">Buy a Gift Voucher</button>
          </div>
        </div>

        {/* Right Side / Process Flow */}
        <div className="gvp-steps">
          {steps.map((step) => (
            <div key={step.id} className="gvp-step-item">
              {/* Step Number */}
              <div className="gvp-step-left">
                <span className="gvp-step-number">{step.id}</span>
                {step.id < steps.length && (
                  <span className="gvp-line"></span>
                )}
              </div>

              {/* Step Content */}
              <div className="gvp-step-content">
                <h3 className="gvp-step-title">{step.title}</h3>
                <div className="gvp-step-details">{step.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftVoucherProcess;
