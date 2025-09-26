import React, { useState } from "react";
import "./EzFaqSection.css";

const faqData = [
  {
    question: "How does EzLicence work?",
    answer: `EzLicence is a revolutionary online platform that connects learner drivers with trusted and accredited driving instructors.

With our user-friendly interface, learners search in their area to find, compare, and book a driving instructor that suits their needs and preferences.

EzLicence is a game-changer for driving instructors. We handle the time-consuming tasks of finding learners, managing bookings, and handling payments, so you can focus on what you do best: providing exceptional instruction and guidance.`
  },
  {
    question: "Is EzLicence the right fit for me?",
    answer: "EzLicence is designed for both learners and instructors, making it a great fit for anyone who wants a simple, streamlined process."
  },
  {
    question: "Can I customise my lesson availability and schedule?",
    answer: "Yes, you can fully customise your schedule to fit your availability."
  },
  {
    question: "Does EzLicence require a minimum number of available hours?",
    answer: "No, you can decide how many hours you want to make available."
  },
  {
    question: "What happens when I go on holidays or want to take an extended break?",
    answer: "You can pause your availability anytime without penalty."
  },
  {
    question: "Can I set my own price for driving lessons?",
    answer: "Yes, instructors can set their own hourly rates."
  },
  {
    question: "What cost is associated with using EzLicence?",
    answer: "EzLicence charges a small service fee per booking."
  },
];

export default function EzFaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ezfaq-container">
      <h2 className="ezfaq-title">Your questions, answered</h2>
      <div className="ezfaq-list">
        {faqData.map((item, index) => (
          <div key={index} className="ezfaq-item">
            <button
              className={`ezfaq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="ezfaq-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="ezfaq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
