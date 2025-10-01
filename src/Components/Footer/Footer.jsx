import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Main Content Column */}
        <div className="footer-about">
          <div className="logo">
            <img
              src="/SilentSolhd-1.png"
              alt="EzLicence Logo"
              className="logo-img"
            />
          </div>
          <p>
            Ezlicence takes the hassle out of choosing a driving school by
            helping learner drivers find, compare and book accredited driving
            instructors online. The Ezlicence online platform brings
            transparency, choice and efficiency to booking and managing driving
            instructors and driving lessons in London, Bristol, Oxford,
            Nottingham, Leicester, Sheffield, Rotherham, Enfield, Harrow,
            Ealing, Barnet, Hounslow, Wimbledon, Wembley, Walthamstow, Hackney.
          </p>
        </div>

        {/* Links Columns */}
        <div className="footer-links">
          {/* Resources */}
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="https://www.ezlicence.co.uk/">Support</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">Blog</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">Contact</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">About</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">
                  Instruct with Etlicence
                </a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">
                  Driving Instructor User policies
                </a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/">Learner User policies</a>
              </li>
            </ul>
            {/* Driving instructors by City */}
            <h4>Driving instructors by City</h4>
            <ul>
              {" "}
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">London Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Wembley Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Bristol Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Oxford Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Sheffield Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Nottingham Driving Lessons</a>
              </li>
            </ul>
          </div>

          {/* Learn to Drive */}
          <div>
            <h4>Learn to Drive</h4>
            <div className="phone">
              <span>📞 Call</span>
              <span className="phone-number">+44 20 4600 5440</span>
            </div>
            <ul>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Test Packages</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Gift Vouchers</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Refresher Driving Lessons</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">International Driver's Licence Conversions</a>
              </li>
              <li>
                <a href="https://www.ezlicence.co.uk/https://www.ezlicence.co.uk/">Australian Driving Lessons</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; Silent Sol Pvt Ltd 2025</p>
        <div className="bottom-links">
          <a href="https://www.ezlicence.co.uk/">Privacy Policy</a>
          <a href="https://www.ezlicence.co.uk/">Terms and Conditions</a>
          <div className="social-icons">
            <a href="https://www.ezlicence.co.uk/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.ezlicence.co.uk/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Footer;
