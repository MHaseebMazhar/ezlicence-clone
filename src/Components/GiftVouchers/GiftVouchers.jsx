import React, { useState } from "react";
import "./GiftVouchers.css";

const cardData = [
  { id: 1, theme: "yellow", title: "Enjoy your gift!", description: "EzLicence" },
  { id: 2, theme: "dark-yellow", title: "Well done!", description: "EzLicence" },
  { id: 3, theme: "white", title: "Congrats to you!", description: "EzLicence" },
];

const GiftCard = ({ theme, title, description, active }) => {
  return (
    <div className={`gift-card gift-card-${theme} ${active ? "active" : ""}`}>
      <div className="gift-card-bg"></div>
      <h3 className="gift-card-title">{title}</h3>
      <p className="gift-card-desc">{description}</p>
    </div>
  );
};

const GiftVouchers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [postcode, setPostcode] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);

  const nextCard = () => {
    setActiveIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleSearch = () => {
    const trimmed = postcode.trim();
    if (trimmed.length >= 4) {
      setSearchStatus({ type: "success", message: `Searching in ${trimmed}...` });
      setTimeout(() => {
        setSearchStatus({ type: "success", message: `Instructors found in ${trimmed}` });
      }, 1500);
    } else {
      setSearchStatus({ type: "error", message: "Please enter at least 4 characters." });
    }
  };

  return (
    <div className="giftvoucher-container">
      <div className="giftvoucher-main">
        {/* LEFT: Carousel */}
        <div className="giftvoucher-left">
          <button onClick={prevCard} className="giftvoucher-nav prev">‹</button>
          <div className="giftvoucher-cards">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={`giftvoucher-card-wrapper ${
                  index === activeIndex ? "center" : ""
                }`}
              >
                <GiftCard {...card} active={index === activeIndex} />
              </div>
            ))}
          </div>
          <button onClick={nextCard} className="giftvoucher-nav next">›</button>

          <div className="giftvoucher-dots">
            {cardData.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="giftvoucher-right">
          <h2>Driving lesson gift vouchers</h2>
          <p>
            Our gift cards for driving lessons unlock access to a large network
            of UK driving instructors. Your recipient has the flexibility to
            choose their own driving instructor & manage their own driving
            lesson schedule online.
          </p>
          <a href="/" className="giftvoucher-btn">
            Buy a gift voucher
          </a>
          <div className="giftvoucher-footnotes">
            <p>* Instructor availability guarantee</p>
            <p>* Valid for 24 months</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="giftvoucher-searchbar">
        <p>Confirm we have instructors in your recipient's location:</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Enter postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchStatus && (
          <p className={`status ${searchStatus.type}`}>{searchStatus.message}</p>
        )}
      </div>

      {/* Footer */}
      <div className="giftvoucher-footer"></div>
    </div>
  );
};

export default GiftVouchers;
