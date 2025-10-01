import React from "react";
import "./GiftVoucherCTA.css";

const GiftVoucherCTA = () => {
  return (
    <div className="gvcta-section">
      <div className="gvcta-wrapper">
        {/* Information Box */}
        <div className="gvcta-info-box">
          <p className="gvcta-message">
            Driving lesson gift vouchers from EzLicence are a great way to show
            your loved ones you care. Gift cards for driving lessons hold their
            value for 2 years & provide access to the largest network of driving
            instructors in the UK. Driving lesson gift vouchers provide your
            recipient the flexibility to choose their own driving instructor and
            book driving lessons online at their leisure.
          </p>
        </div>

        {/* CTA Button */}
        <button className="gvcta-button">Buy a Gift Voucher</button>
      </div>
    </div>
  );
};

export default GiftVoucherCTA;
