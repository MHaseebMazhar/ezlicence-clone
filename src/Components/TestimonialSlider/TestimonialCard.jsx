import React from 'react';
import './TestimonialSlider.css';

const TestimonialCard = ({ img,name, review, author, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="card-header">
        <div className="profile-img"><img src={img} alt=''/></div>
        <div className="header-info">
          <p className="instructor-name">{name}</p>
          <div className="rating-stars">{renderStars()}</div>
        </div>
      </div>
      <div className="card-body">
        <p className="review-text">{review}</p>
      </div>
      <div className="card-footer">
        <p className="author-name">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;