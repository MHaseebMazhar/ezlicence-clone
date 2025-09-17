import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";

const testimonialsData = [
  { img: "/Untitled_design_-_2025-04-30T234808.365-4e6fbf5b8e6b25af27d30d0cb0a75f39.png", name: "Beth", review: "Berthaz is very patient and helpful. She gave me very detailed advice on how to improve my steering and other driving skills. I am very glad that she can be my instructor.", author: "Crystal", rating: 5 },
  { img: "/Untitled_design_-_2025-04-30T234808.365-4e6fbf5b8e6b25af27d30d0cb0a75f39.png",name: "Nimish", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. His patience and expertise made a significant impact on my journey.", author: "Seb T", rating: 5 },
  { img: "/Untitled_design_-_2025-04-30T234808.365-4e6fbf5b8e6b25af27d30d0cb0a75f39.png",name: "Eylem", review: "Eylem is a fantastic instructor, she really made me feel calm and was reassuring throughout the whole process. This wouldn’t have been possible without her support.", author: "EJ", rating: 5 },
  {img: "/_528_-_YAVUZ__Eylem_(1)-8c25f2b6763b596ce8ad3fe19bda2561.png", name: "Yamin", review: "I had my first 2-hour lesson with Yamin, and I couldn’t be more impressed. He explained everything thoroughly, ensuring I understood each step before moving on.", author: "Christian", rating: 5 },
  {img: "/Untitled_design_-_2025-04-30T234808.365-4e6fbf5b8e6b25af27d30d0cb0a75f39.png", name: "Tawfik", review: "I was extremely nervous but T was calm and patient. He knew exactly how to respond to get the best out of me. Thanks to him I now have a full licence!", author: "Rebecca", rating: 5 },
  {img: "/Untitled_design_(4)-be04fbfaec955372af7c299a283d93df.png", name: "Vytas", review: "Vytas is hands down the best driving instructor I’ve met. He’s patient, calm, and always made me feel at ease behind the wheel. Highly recommended!", author: "Saffron M", rating: 5 },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsToShow = 5.5;
  const totalSlides = testimonialsData.length;

  // Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Slice for smooth infinite scroll
  const visibleTestimonials = testimonialsData.slice(
    currentSlide,
    currentSlide + cardsToShow
  );

  if (visibleTestimonials.length < cardsToShow) {
    visibleTestimonials.push(
      ...testimonialsData.slice(0, cardsToShow - visibleTestimonials.length)
    );
  }

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>What more than 100,000 students say</h2>
        <p>Choose a driving instructor you can trust</p>
      </div>

      <div className="slider-container">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            img={testimonial.img}
            name={testimonial.name}
            review={testimonial.review}
            author={testimonial.author}
            rating={testimonial.rating}
          />
        ))}
      </div>

      {/* 4 dots only */}
      <div className="slider-nav">
        {[0, 1, 2, 3].map((dotIndex) => (
          <span
            key={dotIndex}
            className={`nav-dot ${currentSlide % 4 === dotIndex ? "active" : ""}`}
            onClick={() => setCurrentSlide(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
