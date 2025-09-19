import React, { useState } from "react";
import "./EzLicenceAdvantage.css";

const data = [
  {
    id: 1,
    icon: "/download (1).jpeg",
    title: "Book driving lessons online in under 60 seconds",
    content: "Quickly book lessons online with our easy-to-use platform.",
  },
  {
    id: 2,
    icon: "/finger.png",
    title: "More control over your bookings",
    content: "Manage and reschedule your lessons anytime.",
  },
  {
    id: 3,
    icon: "/5394916.png",
    title: "Your online dashboard",
    content: "Track your progress and stay updated.",
  },
  {
    id: 4,
    icon: "/images (2).png",
    title: "A wide range of driving instructors",
    content: "Choose from verified and experienced instructors.",
  },
  {
    id: 5,
    icon: "/images (1).png",
    title: "Servicing YOUR area",
    content: "Find instructors near your location easily.",
  },
];

const bottomFaqs = [
  { id: 1, title: "How do I find private driving instructors near me?", content: "You can search our platform, filter by location and availability." },
  { id: 2, title: "EzLicence: Driving Lessons, Your Way.", content: "We provide flexibility, transparency and verified instructors." },
  { id: 3, title: "Why We’re a Leading Learner Driver Platform in the UK", content: "Because we simplify booking, managing, and tracking lessons." },
  { id: 4, title: "Driving Instructors & Driving Schools You Can Rely On", content: "All our instructors are certified and reviewed by learners." },
];

const EzLicenceAdvantage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="advantage-container">
      <h2 className="title">The EzLicence advantage</h2>

      {/* Top Accordion */}
      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(item.id)}>
              <div className="header-left">
                <img src={item.icon} alt="icon" className="accordion-icon" />
                <span>{item.title}</span>
              </div>
              <span className={`arrow ${openAccordion === item.id ? "open" : ""}`}>
                ▼
              </span>
            </div>
            <div
              className={`accordion-content ${openAccordion === item.id ? "show" : ""}`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="description-box">
        <p>
          At EzLicence, we understand that getting your driver’s licence is both
          exciting and daunting. Our platform makes booking driving lessons and
          passing your test easier than ever!
        </p>
      </div>

      {/* Bottom FAQ Accordion */}
      <div className="faq">
        {bottomFaqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-header" onClick={() => toggleFaq(faq.id)}>
              <span>{faq.title}</span>
              <span className={`arrow ${openFaq === faq.id ? "open" : ""}`}>▼</span>
            </div>
            <div
              className={`accordion-content ${openFaq === faq.id ? "show" : ""}`}
            >
              {faq.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EzLicenceAdvantage;
