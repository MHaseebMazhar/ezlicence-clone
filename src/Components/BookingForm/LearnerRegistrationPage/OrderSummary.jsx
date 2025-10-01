import React from 'react';

const OrderSummary = () => {
    const HandlePayment = () => {
        window.location.href = "/ezl-payment";
    }
    return (
        <aside className="order-summary-sidebar">

            {/* Order Summary Box */}
            <div className="summary-box">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-item">
                    <span>20 hrs Booking Credit</span>
                    <span className="price">£300.00</span>
                </div>
                <div className="summary-subtext">
                    <span>2 hrs booked</span>
                </div>

                <div className="summary-item discount-item">
                    <span>Credit Discount <span className="discount-tag">10% OFF</span></span>
                    <span className="price negative-price">- £90.00</span>
                </div>

                <div className="summary-item item-package">
                    <span>Driving Test Package</span>
                    <a href="/" className="remove-link">remove</a>
                    <span className="price">£240.00</span>
                </div>

                <div className="summary-item">
                    <span>Platform Processing Fee </span>
                    <span className="price">£21.00</span>
                </div>

                <div className="total-due">
                    <p>Total Payment Due</p>
                    <p className="total-price">£1,071.00</p>
                </div>
                <p className="clear-pay-info">or 4 payments of £267.75</p>

                <button className="continue-button" onClick={HandlePayment}>
                    Continue to Payment <span>&gt;</span>
                </button>
                <button className="referral-button">
                    <span className="icon"></span> I have a referral code
                </button>
            </div>
            
            {/* Payment Logos */}
            <div className="payment-logos">
                <img src="/pay-in-4-clearpay.svg" alt="Pay in 4 with Clearpay" className="clearpay-logo"/>
            </div>

            {/* Purchase with peace of mind */}
            <div className="info-box">
                <h4>Purchase with peace of mind</h4>
                <p className="info-title">Manage Your Lessons Online</p>
                <p className="info-text">24/7 access. Manage your account. Switch your instructor at no cost.</p>
                <p className="info-title">Secure Payments</p>
                <p className="info-text">We use 100% secure payments to provide you with a simple and safe experience.</p>
            </div>

            {/* Testimonial */}
            <div className="testimonial-box">
                <div className="testimonial-header">
                    <span className="reviewer-name">Delia T</span>
                    <span className="verified-learner">Verified Learner</span>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                    When having my lesson, Joanna was very kind and encouraging. She was always open to questions and very friendly. Passed first time. Highly recommended. Thanks Joanna.
                </p>
            </div>

        </aside>
    );
};

export default OrderSummary;