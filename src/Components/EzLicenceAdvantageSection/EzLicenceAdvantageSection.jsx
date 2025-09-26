import React, { useState, useRef, useEffect } from "react";
import "./EzLicenceAdvantageSection.css";

// --- Data for Advantage Accordion ---
const advData = [
  {
    id: 1,
    icon: "/download (1).jpeg",
    title: "Book driving lessons online in under 60 seconds",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 2,
    icon: "/finger.png",
    title: "More control over your bookings",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control...",
  },
  {
    id: 3,
    icon: "/5394916.png",
    title: "Your online dashboard",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process...",
  },
  {
    id: 4,
    icon: "/images (2).png",
    title: "A wide range of driving instructors",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process...",
  },
  {
    id: 5,
    icon: "/images (1).png",
    title: "Servicing YOUR area",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process...",
  },
];

// --- Single Accordion Item ---
const AdvantageAccordionItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="advantage-item">
      <div className="advantage-header" onClick={onToggle}>
        <div className="advantage-header-left">
           {item.icon && (
            <img src={item.icon} alt="icon" className="accordion-icon" />
          )}
         
          <span className="advantage-title">{item.title}</span>
        </div>
        <span className={`advantage-arrow ${isOpen ? "open" : ""}`}>⌵</span>
      </div>

      <div
        className="advantage-content-wrapper"
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="advantage-content">
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};

// --- Accordion List + FAQ inside it ---
const AdvantageAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [faqOpen, setFaqOpen] = useState(true);

  return (
    <div className="advantage-accordion">
      {advData.map((item) => (
        <AdvantageAccordionItem
          key={item.id}
          item={item}
          isOpen={openAccordion === item.id}
          onToggle={() =>
            setOpenAccordion(openAccordion === item.id ? null : item.id)
          }
        />
      ))}

      {/* FAQ Item (works like accordion item) */}
      <div className="advantage-item faq-item">
        <div className="advantage-header" onClick={() => setFaqOpen(!faqOpen)}>
          <span className="advantage-title">
            How do I find private driving instructors near me?
          </span>
          <span className={`advantage-arrow ${faqOpen ? "open" : ""}`}>⌵</span>
        </div>

        <div
          className="advantage-content-wrapper"
          style={{ height: faqOpen ? "auto" : "0px" }}
        >
          <div className="advantage-content">
            <p>
              We know what it’s like when you first start learning to drive – we
              were all there once too. Some of us were nervous, some were excited,
              but all of us were ready to succeed. Where do you start when you are
              ready to choose a driving school?
            </p>
            <p>
              Regardless of whether you’re learning to drive for the first time
              and looking to log your first few hours, or an experienced driver
              looking to ease yourself back into the driver’s seat with{" "}
              <a href="/">refresher driving lessons</a>, our wide variety of
              driving instructors can cater to your individual needs.
            </p>
            <p>
              Learn from a true professional and book your{" "}
              <a href="/">driving lessons</a> with a private driving instructor
              at EzLicence, so you can get your driving experience started the
              right way.
            </p>
            <p className="faq-footer">
              Learn smart. Learn safe. Learn easy with EzLicence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section ---
const EzLicenceAdvantageSection = () => (
  <div className="advantage-section">
    <h2 className="advantage-section-title">The EzLicence advantage</h2>
    <AdvantageAccordion />
  </div>
);

export default EzLicenceAdvantageSection;
