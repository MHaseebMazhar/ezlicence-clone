import React from "react";
import "./GiftVoucherSection.css";

const VoucherIcon = "💳"; // Placeholder
const GiftIcon = "🎁";   // Placeholder

const GiftVoucherSection = () => {
  return (
    <div className="gv-container">
      {/* LEFT: Cards */}
      <div className="gv-cards">
        <img src="Cards.png" alt="Gift Vouchers" className="gv-cards-image" />
      </div>

      {/* RIGHT: Text + Steps */}
      <div className="gv-content">
        <h2 className="gv-title">The gift of life long skills</h2>

        <div className="gv-steps">
          <div className="gv-step">
            <div className="gv-icon">{VoucherIcon}</div>
            <h3>Pick a voucher</h3>
            <p>Choose the number of lessons that you want to purchase.</p>
          </div>
          <div className="gv-step">
            <div className="gv-icon">{GiftIcon}</div>
            <h3>Send your gift</h3>
            <p>Enter the recipient's info and the gift is on the way.</p>
          </div>
        </div>

        <button className="gv-btn">
          Buy a Gift Voucher <span className="gv-arrow">›</span>
        </button>
      </div>
    </div>
  );
};

export default GiftVoucherSection;
