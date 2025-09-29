import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./InstructorSlider.css";

const categories = [
  "Top Rated",
  "Next Available",
  "Lowest Price",
  "Female Instructors",
  "Auto Profiles",
  "Manual Profiles",
];

// Example instructor data for each category
const instructorsData = {
  "Top Rated": [
    { name: "John", rating: "5.0 (20)", lessons: "200 lessons", price: "£42 / hr", car: "Manual", img: "https://via.placeholder.com/60" },
    { name: "Ali", rating: "4.9 (15)", lessons: "180 lessons", price: "£40 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
  ],
  "Next Available": [
    { name: "Sara", rating: "4.8 (10)", lessons: "90 lessons", price: "£38 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
  ],
  "Lowest Price": [
    { name: "David", rating: "4.7 (8)", lessons: "60 lessons", price: "£35 / hr", car: "Manual", img: "https://via.placeholder.com/60" },
  ],
  "Female Instructors": [
    { name: "Angela", rating: "5.0 (12)", lessons: "75 lessons", price: "£40 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
    { name: "Liana", rating: "5.0 (13)", lessons: "151 lessons", price: "£45 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
    { name: "Zamzam", rating: "5.0 (15)", lessons: "19 lessons", price: "£38 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
    { name: "Bushra", rating: "5.0 (7)", lessons: "6 lessons", price: "£40 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
  ],
  "Auto Profiles": [
    { name: "Chris", rating: "4.9 (14)", lessons: "120 lessons", price: "£39 / hr", car: "Auto", img: "https://via.placeholder.com/60" },
  ],
  "Manual Profiles": [
    { name: "Mark", rating: "4.8 (11)", lessons: "100 lessons", price: "£41 / hr", car: "Manual", img: "https://via.placeholder.com/60" },
  ],
};

export default function InstructorSlider() {
  const [activeCategory, setActiveCategory] = useState("Female Instructors");

  return (
    <div className="instructor-slider">
      <h2 className="heading">Driving lessons in London</h2>
      <p className="subheading">
        EzLicence has connected 2,648 learners to the best instructors in London.
      </p>

      {/* Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Active Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className="mySwiper"
      >
        {instructorsData[activeCategory]?.map((inst, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <img src={inst.img} alt={inst.name} className="profile-img" />
              <h3>{inst.name}</h3>
              <p className="rating">⭐ {inst.rating}</p>
              <p>{inst.car}</p>
              <p>{inst.lessons}</p>
              <p className="price">{inst.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="note">
        Some learners prefer a female instructor for added comfort or a
        particular teaching style, while others simply feel more at ease
        learning with a woman. Regardless of gender, all EzLicence instructors
        are committed to helping you become a safe and confident driver.
      </p>
    </div>
  );
}
