import React from "react";
import EzlPaymentOptions from "./EzlPaymentOptions";
import EzlOrderSummary from "./EzlOrderSummary";
import "./EzlPaymentPage.css";
import EzHeader from "../../EzHeader/EzHeader";

const EzlPaymentPage = () => {
  return (
    <>
      <EzHeader />
       
      <div className="ezl-payment-container">
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
              className={`progress-step ${item.step === 5 ? "active" : ""}`}
            >
              <div className="step-circle">{item.step}</div>
              <div className="step-label">{item.label}</div>
            </div>
          ))}
        </div>
        <h1 className="ezl-payment-title">Payment</h1>
        <p className="ezl-payment-subtitle">
          The final step to start your learning journey!
        </p>
        <div className="ezl-content-area">
          <EzlPaymentOptions />
          <EzlOrderSummary />
        </div>
      </div>
    </>
  );
};

export default EzlPaymentPage;
