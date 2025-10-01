import React, { useState } from 'react';


const EzlOrderSummary = () => {
  const [paymentDone, setPaymentDone] = useState(false);

  const handleCheckout = () => {
    setPaymentDone(true);

    // Optional: agar message 3 sec baad hide karna ho
    setTimeout(() => setPaymentDone(false), 3000);
  };

  return (
    <aside className="ezl-order-summary">
      <div className="ezl-summary-box">
        <h3 className="ezl-summary-title">Order Summary</h3>
        
        <div className="ezl-summary-item">
          <span>⏱️ 20 hrs Booking Credit</span>
          <span className="ezl-price">£1,040.00</span>
        </div>

        <div className="ezl-summary-item ezl-discount-item">
          <span>
            Credit Discount <span className="ezl-discount-tag">10% OFF</span>
          </span>
          <span className="ezl-price ezl-negative-price">- £104.00</span>
        </div>

        <div className="ezl-total-due">
          <p>Total Payment Due</p>
          <p className="ezl-total-price">£936.00</p>
        </div>

        <p className="ezl-payment-plan">Or 4 payments of £234.00</p>

        {/* Checkout Button */}
        <button className="ezl-checkout-btn" onClick={handleCheckout}>
          <img
            src="/logo-paypal-payin4-a432892ea675bf73c06c06a6bb4ac4cdd32a4e5214d6fbeef7e3b431fafcedd6.svg"
            alt="PayPal"
            className="ezl-checkout-logo"
          />
          Checkout
        </button>

        {/* ✅ Payment Success Message */}
        {paymentDone && (
          <p className="ezl-payment-success">✅ Payment Done Successfully!</p>
        )}
      </div>
    </aside>
  );
};

export default EzlOrderSummary;
