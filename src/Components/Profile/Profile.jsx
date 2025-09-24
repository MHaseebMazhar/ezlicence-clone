import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Profile.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

// Instructor data (later replace with API call)
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
    spokenLanguages: ["English"],
    vehicle: {
      model: "Toyota Corolla 2022 (Auto)",
      ncapRating: "5-star NCAP rating",
      controls: "Dual controls fitted",
    },
    mapImage: "/map-image.png", // Placeholder for the map image
  },
];

const Profile = () => {
  const { instructorId } = useParams();
  const navigate = useNavigate();
  const instructor = instructors.find((ins) => ins.id === instructorId);

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showImage, setShowImage] = useState(false);
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

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleBookNow = () => {
    navigate(`/amount`, {
      state: { instructorName: instructor.name },
    });
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="profile-container">
        {/* Yellow header bar */}
        <div className="profile-info">
          <div className="back-btn" onClick={handleBackClick}>
            <p>&lt; Back</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="profile-header-card">
          <div className="profile-details">
            {/* Bio Section */}
            <div className="profile-bio-section">
              <div className="profile-images">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="profile-img1"
                />
                <img
                  src={instructor.car}
                  alt="Car"
                  className="profile-car-img"
                />
                <h2>{instructor.name}</h2>
              </div>

              <hr className="custom-line" />

              <h3>Instructor Bio</h3>
              <p>{instructor.bio}</p>

              <div className="bio-details">
                <p>
                  <span>🗓️</span> Auto Lessons
                </p>
                <p>
                  <span>✅</span> {instructor.approved}
                </p>
                <p>
                  <span>📅</span> {instructor.experience}
                </p>
              </div>

              <div className="languages-section">
                <h3>Spoken language(s)</h3>
                <div className="language-tags">
                  {instructor.spokenLanguages.map((lang) => (
                    <span key={lang} className="language-tag">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="custom-line" />

              <div className="reviews-section">
                <h3>Reviews</h3>
                <p>
                  There are no reviews to display yet. This instructor is new to
                  EziLicence.
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-section">
              <div className="pricing-card">
                <div className="price-item">
                  <p>
                    <b>Hourly Price</b>
                  </p>
                  <p>
                    <b>{instructor.price}</b>
                  </p>
                </div>

                <p className="offers-text">{instructor.offers}</p>

                <hr className="custom-line" />
                <div className="price-item1">
                  <p>10hrs or more</p>
                  <span className="save-tag">{instructor.discount10}</span>
                </div>

                <hr className="custom-line" />
                <div className="price-item1">
                  <p>20hrs or more</p>
                  <span className="save-tag">{instructor.discount20}</span>
                </div>

                <hr className="custom-line" />

                <button className="book-btn" onClick={handleBookNow}>
                  Book Now
                </button>
                <button className="check-availability-btn">
                  Check Availability
                </button>

                <div className="payment-icons">
                  <img src="/11.png" alt="Visa" />
                  <img src="/22.jpeg" alt="Mastercard" />
                  <img src="/33.png" alt="Amex" />
                  <img src="/download (3).jpeg" alt="Clearpay" />
                  <img src="/download (4).jpeg" alt="PayPal" />
                </div>
              </div>

              <div className="pricing-card1">
                <div className="pay-in-4">
                  <img
                    src="/logo-paypal-payin4-a432892ea675bf73c06c06a6bb4ac4cdd32a4e5214d6fbeef7e3b431fafcedd6.svg"
                    alt="Pay in 4"
                  />
                  <img
                    src="/clearpay-59b545b62013b0074997065871feb4611c2fa766330334b145501a722533b768.png"
                    alt="Clearpay"
                  />
                </div>
              </div>
              <div className="booking-card">
                <div className="booking-row">
                  <span className="icon1">✅</span>
                  <div>
                    <p className="title1">Free cancellation</p>
                    <p className="subtitle">
                      Reschedule online up to 48 hours before a booking.
                    </p>
                  </div>
                </div>

                <div className="booking-row">
                  <span className="icon1">👍</span>
                  <div>
                    <p className="title1">Instructor choice</p>
                    <p className="subtitle">
                      Choose your instructor, change online anytime.
                    </p>
                  </div>
                </div>

                <div className="booking-row">
                  <span className="icon1">🗓️</span>
                  <div>
                    <p className="title1">Book now or later</p>
                    <p className="subtitle">
                      Buy a package, make bookings now or later.
                    </p>
                  </div>
                </div>

                <div className="booking-row">
                  <span className="icon1">⏰</span>
                  <div>
                    <p className="title1">Real-time availability</p>
                    <p className="subtitle">
                      Book directly into your instructor's calendar.
                    </p>
                  </div>
                </div>

                {/* Accordion */}
                <div
                  className="more-info-dropdown"
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                >
                  <p>More info about bookings</p>
                  <span
                    style={{
                      transform: showMoreInfo
                        ? "rotate(90deg)"
                        : "rotate(-90deg)",
                    }}
                  >
                    &lt;
                  </span>
                </div>

                {showMoreInfo && (
                  <div className="accordion-content2">
                    <p>
                      At the completion of the booking process you can leave
                      notes for your instructor about your preferences
                      (optional).
                    </p>
                    <p>
                      Your online account is created during the booking process:
                    </p>
                    <ul>
                      <li>Review / edit your bookings & profile details</li>
                      <li>
                        Book / purchase additional lessons or a test package
                      </li>
                      <li>
                        Reschedule bookings at no cost (up to 48 hours before
                        start time)
                      </li>
                      <li>Change your instructor or pick up address</li>
                      <li>
                        Your instructor's contact details are displayed in your
                        online account, the instructor also receives your
                        contact details.
                      </li>
                      <li>
                        Your chosen instructor will meet you with their dual
                        controlled vehicle at the location/date/time selected -
                        no need to confirm.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Vehicle Card */}
              <div className="profile-vehicle-card">
                <h4>{instructor.name}'s vehicle</h4>
                <div className="vehicle-details">
                  <img
                    src={instructor.car}
                    alt="Vehicle"
                    className="vehicle-img"
                    onClick={() => setShowImage(true)} // 👈 open modal on click
                    style={{ cursor: "pointer" }}
                  />
                  <div className="vehicle-info">
                    <p>
                      <b>{instructor.vehicle.model}</b>
                    </p>
                    <p>{instructor.vehicle.ncapRating}</p>
                    <p>{instructor.vehicle.controls}</p>
                  </div>
                </div>
              </div>

              {/* Modal for Image Preview */}
              {showImage && (
                <div
                  className="modal-overlay"
                  onClick={() => setShowImage(false)}
                >
                  <div className="modal-content">
                    <img src={instructor.car} alt="Vehicle Large" />
                  </div>
                </div>
              )}

              {/*  Map Card */}

              <div className="service-area">
                <div className="service-header">
                  <h4>{instructor.name} services Leicester</h4>
                  <p
                    onClick={() => setShowMoreInfo(!showMoreInfo)}
                    style={{
                      cursor: "pointer",
                      color: "#007bff",
                      fontWeight: "500",
                    }}
                  >
                    {showMoreInfo ? "Hide list" : "View full list"}
                  </p>
                </div>

                {/* Dropdown List (Map se pehle) */}
                {showMoreInfo && (
                  <ul className="postcode-list">
                    <li>Leicester LE5 0</li>
                    <li>Leicester LE5 3</li>
                    <li>Leicester LE1 2</li>
                    <li>Leicester LE5 5</li>
                    <li>Leicester LE2 3</li>
                    <li>Leicester LE18 1</li>
                    <li>Leicester LE2 4</li>
                    <li>Leicester LE2 5</li>
                    <li>Leicester LE5 4</li>
                    <li>Leicester LE5 6</li>
                    <li>Leicester LE2 2</li>
                    <li>Leicester LE4 0</li>
                    <li>Leicester LE4 6</li>
                    <li>Leicester LE4 5</li>
                  </ul>
                )}

                {/* Google Maps Embed */}
                <iframe
                  title="Leicester Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95638.89448109807!2d-1.210937537236851!3d52.636877815826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877616d540d957b%3A0x4f02197f0e07e68d!2sLeicester%2C%20UK!5e0!3m2!1sen!2suk!4v1695402296673!5m2!1sen!2suk"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                <p className="map-caption">
                  Instructor service area: Leicester
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
