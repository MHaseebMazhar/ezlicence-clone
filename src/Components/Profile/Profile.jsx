import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

// Define the instructor data
const instructors = [
  {
    id: "1",
    name: "Nadira",
    bio: "My name is Nadira. I have been a driving instructor since 2008. I want to have a positive impact. I am patient and understanding. I highly enjoy seeing learners gain confidence and independence. I am experienced in teaching new drivers but also international drivers looking to adjust to UK roads and rules. My main goal when working with learners is to help you pass the driving test as quickly as possible.",
    experience: "Instructed for 17 yr. 3 mo.",
    approved: "Verified ADI Licence",
    price: "£40.00/hr",
    offers: "Offers 1 & 2hr lessons",
    discount10: "SAVE 5%",
    discount20: "SAVE 10%",
    image: "/_367_-_ALAM__Nadira_(3)-4c0f8b642e84821d28e9a088aca20ec0.png",
    car: "/temp20231128-2993811-ptlh22-353841ace556861670ef1f886ea9c8ad.png",
    spokenLanguages: ["English"]
  },
  
];

const Profile = () => {
  const { instructorId } = useParams();
  const instructor = instructors.find(ins => ins.id === instructorId);

  if (!instructor) {
    return (
      <>
        <Topbar />
        <Navbar />
        <div className="profile-container">
          <p>Instructor not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="profile-container">
        <div className="profile-header-card">
          <div className="profile-info">
            <div className="profile-images">
              <img src={instructor.image} alt={instructor.name} className="profile-img" />
              <img src={instructor.car} alt="Car" className="profile-car-img" />
            </div>
            <div className="profile-name">
            <h2>{instructor.name}</h2>
            </div>
          </div>
          <div className="profile-details">
            <div className="profile-bio-section">
              <h3>Instructor Bio</h3>
              <p>{instructor.bio}</p>
              <div className="bio-details">
                <p><span>🗓️</span> Auto Lessons</p>
                <p><span>✅</span> {instructor.approved}</p>
                <p><span>📅</span> {instructor.experience}</p>
              </div>
              <div className="languages-section">
                <h3>Spoken language(s)</h3>
                <div className="language-tags">
                  {instructor.spokenLanguages.map(lang => (
                    <span key={lang} className="language-tag">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="reviews-section">
                <h3>Reviews</h3>
                <p>There are no reviews to display yet. This instructor is new to EziLicence.</p>
              </div>
            </div>
            <div className="pricing-section">
              <div className="pricing-card">
                <div className="price-item">
                  <h4>Hourly Price</h4>
                  <p><b>{instructor.price}</b></p>
                </div>
                <p className="offers-text">{instructor.offers}</p>
                <div className="price-item">
                  <p>10hrs or more</p>
                  <span className="save-tag">{instructor.discount10}</span>
                </div>
                <div className="price-item">
                  <p>20hrs or more</p>
                  <span className="save-tag">{instructor.discount20}</span>
                </div>
                <button className="book-btn">Book Now</button>
                <button className="check-availability-btn">Check Availability</button>
                <div className="payment-icons">
                    <img src="/11.png" alt="Visa" />
                    <img src="/22.jpeg" alt="Mastercard" />
                    <img src="/33.png" alt="Amex" />
                </div>
                <div className="pay-in-4">
                  <p>Pay in 4</p>
                  <img src="/download (3).jpeg" alt="Clearpay" />
                  <img src="/download (4).jpeg" alt="Clearpay" />
                </div>
                <hr />
                <div className="cancellation-info">
                  <span>✅</span>
                  <div>
                    <p>Free cancellation</p>
                    <p>Reschedule online up to 48 hours before a booking.</p>
                  </div>
                </div>
                <div className="instructor-choice">
                  <span>👍</span>
                  <div>
                    <p>Instructor choice</p>
                    <p>Choose your instructor, change online anytime.</p>
                  </div>
                </div>
                {/* New sections added below */}
                <div className="booking-info">
                  <span>🗓️</span>
                  <div>
                    <p>Book now or later</p>
                    <p>Buy a package, make bookings now or later.</p>
                  </div>
                </div>
                <div className="availability-info">
                  <span>⏰</span>
                  <div>
                    <p>Real-time availability</p>
                    <p>Book directly into your instructor's calendar.</p>
                  </div>
                </div>
                <div className="more-info-dropdown">
                    <p>More info about bookings</p>
                    <span>&lt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;