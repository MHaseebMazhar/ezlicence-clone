import React from 'react';
import './LearnerRegistrationPage.css';
import RegistrationForm from './RegistrationForm';
import OrderSummary from './OrderSummary';
import EzHeader from '../../EzHeader/EzHeader';

const LearnerRegistrationPage = () => {
    return (
      <>
        <EzHeader />
      
        <div className="registration-container">
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
              className={`progress-step ${item.step === 4 ? "active" : ""}`}
            >
              <div className="step-circle">{item.step}</div>
              <div className="step-label">{item.label}</div>
            </div>
          ))}
        </div>
            <h1 className="main-title2">Learner Registration</h1>
            <p className="existing-learner3">
                Existing learner? <a href="/" className="login-link2">Log in</a>
            </p>

            <div className="content-layout">
                <RegistrationForm />
                <OrderSummary />
            </div>
        </div>
      </>
    );
};

export default LearnerRegistrationPage;