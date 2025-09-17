import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";

const testimonialsData = [
  { name: "Beth", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Crystal", rating: 5 },
  { name: "Nimish", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Seb T", rating: 5 },
  { name: "Eylem", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "EJ", rating: 5 },
  { name: "Yamin", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Christian", rating: 5 },
  { name: "Tawfik", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Rebecca", rating: 5 },
  { name: "Vytas", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Saffron M", rating: 5 },
   { name: "Beth", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Crystal", rating: 5 },
  { name: "Nimish", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Seb T", rating: 5 },
  { name: "Eylem", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "EJ", rating: 5 },
  { name: "Yamin", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Christian", rating: 5 },
  { name: "Tawfik", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Rebecca", rating: 5 },
  { name: "Vytas", review: "I am extremely grateful to Nimish for his invaluable assistance in helping me pass my driving test and conquer my fears. As my first driving instructor, his unwavering patience and exceptional expertise made a significant impact on my journey. Nimish’s skills and knowledge as an approved instructor, coupled with his compassionate nature, empowered me to develop a newfound confidence and master the art of becoming a proficient driver.", author: "Saffron M", rating: 5 },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsToShow = 5.5;
  const totalSlides = testimonialsData.length;

  // Auto slide har 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Slice cards
  const visibleTestimonials = testimonialsData.slice(
    currentSlide,
    currentSlide + cardsToShow
  );

  // Loop handle
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
            name={testimonial.name}
            review={testimonial.review}
            author={testimonial.author}
            rating={testimonial.rating}
          />
        ))}
      </div>

      {/* Fixed 4 Dots */}
      <div className="slider-nav">
        {[0, 1, 2, 3].map((dotIndex) => (
          <span
            key={dotIndex}
            className={`nav-dot ${
              currentSlide % 4 === dotIndex ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
