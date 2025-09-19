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
  { id: 1, title: "How do I find private driving instructors near me?" },
  { id: 2, title: "EzLicence: Driving Lessons, Your Way." },
  { id: 3, title: "Why We’re a Leading Learner Driver Platform in the UK" },
  { id: 4, title: "Driving Instructors & Driving Schools You Can Rely On" },
];

const EzLicenceAdvantage = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="advantage-container">
      <h2 className="title">The EzLicence advantage</h2>

      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div className="accordion-header" onClick={() => toggle(item.id)}>
              <img src={item.icon} alt="icon" className="accordion-icon" />
              <span>{item.title}</span>
              <span className="arrow">{openId === item.id ? "▲" : "▼"}</span>
            </div>
            {openId === item.id && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>

      <div className="description-box">
        <p>
          At EzLicence, we understand that getting your driver’s licence is both
          exciting and daunting. Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with Then there’s scheduling lesson times that suit
          your lifestyle – and theirs. All of this can make the journey to
          getting your full driver’s licence feel overwhelming So, we’ve set out
          to change the process for the better. If you’re ready for learner
          driver lessons, you’re likely to be asking yourself: “who’s the best
          driving instructor near me?” Our online platform, EzLicence, makes
          booking driving lessons and passing your driving test easier than
          ever!
        </p>
      </div>

      <div className="faq">
        {bottomFaqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-header">
              {faq.title} <span>▼</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EzLicenceAdvantage;
