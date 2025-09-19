import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Main Content Column */}
        <div className="footer-about">
          <div className="logo">
           <img src="/logo-ezlicence-simple-coloured-4f13463a55c628f757204c7ee1e6efb980c37ea9070beac8b9e5166fda60538f.png" alt="EzLicence Logo" className="logo-img" />
          </div>
          <p>
            Ezlicence takes the hassle out of choosing a driving school by helping learner drivers find, compare and book accredited driving instructors online.
            The Ezlicence online platform brings transparency, choice and efficiency to booking and managing driving instructors and driving lessons in London, Bristol, Oxford, Nottingham, Leicester, Sheffield, Rotherham, Enfield, Harrow, Ealing, Barnet, Hounslow, Wimbledon, Wembley, Walthamstow, Hackney.
          </p>
        </div>

        {/* Links Columns */}
        <div className="footer-links">
          {/* Resources */}
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Instruct with Etlicence</a></li>
              <li><a href="#">Driving Instructor User policies</a></li>
              <li><a href="#">Learner User policies</a></li>
            </ul>
           {/* Driving instructors by City */}
           <h4>Driving instructors by City</h4>
            <ul>
              <li><a href="#">London Driving Lessons</a></li>
              <li><a href="#">Wembley Driving Lessons</a></li>
              <li><a href="#">Bristol Driving Lessons</a></li>
              <li><a href="#">Oxford Driving Lessons</a></li>
              <li><a href="#">Sheffield Driving Lessons</a></li>
              <li><a href="#">Nottingham Driving Lessons</a></li>
            </ul>
          </div>
         
          {/* Learn to Drive */}
          <div>
            <h4>Learn to Drive</h4>
            <div className="phone">
              <span>📞</span>
              <span className="phone-number">+44 20 4600 5440</span>
            </div>
            <ul>
              <li><a href="#">Driving Lessons</a></li>
              <li><a href="#">Test Packages</a></li>
              <li><a href="#">Gift Vouchers</a></li>
              <li><a href="#">Refresher Driving Lessons</a></li>
              <li><a href="#">International Driver's Licence Conversions</a></li>
              <li><a href="#">Australian Driving Lessons</a></li>
            </ul>
          </div>
         
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; Ezlicence UK Ltd 2025</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Support button */}
      <div className="support-btn">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9.248a1 1 0 011.536 0L12 11.233l2.236-1.985a1 1 0 011.536 0l2.236 1.985a1 1 0 010 1.536l-1.985 2.236a1 1 0 01-1.536 0L12 14.767l-2.236-1.985a1 1 0 01-1.536 0L5.993 11.233a1 1 0 010-1.536l1.985-2.236z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Footer;
