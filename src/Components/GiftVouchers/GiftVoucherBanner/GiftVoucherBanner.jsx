import React, { useRef, useState, useEffect } from "react";
import "./GiftVoucherBanner.css";

const giftCardData = [
  {
    illustration: (
      <img
        className="voucher-img"
        src="/merry-christmas-7d2fb5acc02900dc0478ff4be956762bbdf423db0a4b0ac669102d991181b09c.png"
        alt="Merry Christmas"
      />
    ),
  },
  {
    illustration: (
      <img
        className="voucher-img"
        src="/well-done-2398e6fba860d9d3faf716fc3f8d88e4b414c2d2a3a6b1c12253236dfb70831c.png"
        alt="Well Done"
      />
    ),
  },
  {
    illustration: (
      <img
        className="voucher-img"
        src="/happy-birthday-04f06a927dcab37f751de0b498844899590911fb6e5403aa6b4b7791aad1c980.png"
        alt="Happy Birthday"
      />
    ),
  },
  {
    illustration: (
      <img
        className="voucher-img"
        src="/enjoy-your-gift-25223d1bbb53d4149c52445c961bc51afdf18c91f55e1320e84dc1766bb30e33.png"
        alt="Enjoy your gift"
      />
    ),
  },
  {
    illustration: (
      <img
        className="voucher-img"
        src="/enjoy-your-gift-25223d1bbb53d4149c52445c961bc51afdf18c91f55e1320e84dc1766bb30e33.png"
        alt="Enjoy your gift"
      />
    ),
  },
];

const GiftVoucherBanner = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const cardWidth =
        container.querySelector(".voucher-card")?.offsetWidth || 0;
      const spacing = 16;
      const newIndex = Math.round(scrollLeft / (cardWidth + spacing));
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".voucher-card")?.offsetWidth || 0;
      const spacing = 16;
      container.scrollTo({
        left: index * (cardWidth + spacing),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      let timeout;
      const debouncedScroll = () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 50);
      };
      container.addEventListener("scroll", debouncedScroll);
      return () => {
        container.removeEventListener("scroll", debouncedScroll);
      };
    }
  }, []);

  return (
    <div className="voucher-banner">
      <div className="voucher-wrapper">
        {/* Left Carousel */}
        <div className="voucher-left">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="voucher-cards no-scrollbar"
          >
            {giftCardData.map((card, index) => (
              <div key={index} className={`voucher-card ${card.color}`}>
                <div className="voucher-illustration-wrap">{card.illustration}</div>
              </div>
            ))}
          </div>

          <div className="voucher-dots">
            {giftCardData.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index)}
                className={`voucher-dot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="voucher-right">
          <h1>Driving lesson gift vouchers</h1>
          <p>
            Our gift cards for driving lessons unlock access to a large network
            of UK driving instructors. Your recipient has the flexibility to
            choose their own driving instructor & manage their own driving
            lesson schedule online.
          </p>
          <button className="voucher-btn">Buy a Gift Voucher</button>
          <div className="voucher-notes">
            <p>* Instructor availability guarantee</p>
            <p>* Driving lesson gift vouchers are valid for 24 months</p>
          </div>
        </div>
      </div>

      <div className="voucher-checkbar">
        Confirm we have driving instructors in your recipient's location:
      </div>
    </div>
  );
};

export default GiftVoucherBanner;
