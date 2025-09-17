import React from 'react';
import FeatureItem from './FeatureItem';
import './FeaturesSection.css';

const featuresData = [
  {
    img: "/Gemini_Generated_Image_xc3ktwxc3ktwxc3k.png",
    title: "Learners trusted us to get them road-ready",
  },
  {
    img: "/clock-icon-vector-time-symbol-600nw-1729758826.jpg",
    title: "Book lessons 24/7 online in real time",
  },
  {
    img: "/684095ecf11cc_com.samsung.android.imagepp.png",
    title: "All instructors are police checked",
  },
  {
    img: "/images.jpeg",
    title: "Change your instructor anytime",
  },
  {
    img: "/images.png",
    title: "Manage your lesson bookings online",
  },
  {
    img: "/download.png",
    title: "Buy confidently with hassle-free refunds",
  },
];

const FeaturesSection = () => {
  return (
    <div className="features-section-container">
      {featuresData.map((feature, index) => (
        <FeatureItem key={index} img={feature.img} title={feature.title} />
      ))}
    </div>
  );
};

export default FeaturesSection;
