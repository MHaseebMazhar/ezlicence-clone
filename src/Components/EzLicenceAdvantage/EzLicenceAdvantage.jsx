import React, { useState, useRef, useEffect } from "react";
import "./EzLicenceAdvantage.css";

const data = [
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
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 3,
    icon: "/5394916.png",
    title: "Your online dashboard",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 4,
    icon: "/images (2).png",
    title: "A wide range of driving instructors",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 5,
    icon: "/images (1).png",
    title: "Servicing YOUR area",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
];

const bottomFaqs = [
  {
    id: 1,
    title: "How do I find private driving instructors near me?",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 2,
    title: "EzLicence: Driving Lessons, Your Way.",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 3,
    title: "Why We’re a Leading Learner Driver Platform in the UK",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 4,
    title: "Driving Instructors & Driving Schools You Can Rely On",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // include padding in calculation
      setHeight(isOpen ? contentRef.current.scrollHeight + 20 : 0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <div className="header-left">
          {item.icon && (
            <img src={item.icon} alt="icon" className="accordion-icon" />
          )}
          <span>{item.title}</span>
        </div>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>

      <div
        className={`accordion-content-wrapper ${isOpen ? "open" : ""}`}
        style={{ height: height }}
      >
        <div ref={contentRef} className="accordion-content1">
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};

const EzLicenceAdvantage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="advantage-container">
      <h2 className="title">The EzLicence advantage</h2>

      {/* Top Accordion */}
      <div className="accordion">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openAccordion === item.id}
            onToggle={() =>
              setOpenAccordion(openAccordion === item.id ? null : item.id)
            }
          />
        ))}
      </div>

      {/* Description */}
      <div className="description-box">
        <p>
          At EzLicence, we understand that getting your driver’s licence is both
          exciting and daunting. Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with. And they’ll need to live close to you. Then
          there’s scheduling lesson times that suit your lifestyle – and theirs.
          All of this can make the journey to getting your full driver’s licence
          feel overwhelming So, we’ve set out to change the process for the
          better. If you’re ready for learner driver lessons, you’re likely to
          be asking yourself: “who’s the best driving instructor near me?” Our
          online platform, EzLicence, makes booking driving lessons and passing
          your driving test easier than ever!
        </p>
      </div>

      {/* Bottom FAQ Accordion */}
      <div className="faq">
        {bottomFaqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            item={faq}
            isOpen={openFaq === faq.id}
            onToggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default EzLicenceAdvantage;
