import React from "react";
import "./EzHeader.css";

const EzHeader = () => {
  return (
    <header className="ez-header">
      {/* Logo */}
      <div className="ez-logo-container">
        <img
          src="/SilentSolhd-1.png"
          alt="EzLicence Logo"
          className="ez-logo"
        />
      </div>

      {/* Right Side */}
      <div className="ez-header-right">
        {/* User Icon */}
        <svg
          className="ez-user-icon"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6654 16.5C14.6654 15.337 14.6654 14.7555 14.5218 14.2824C14.1987 13.217 13.365 12.3834 12.2996 12.0602C11.8265 11.9167 11.245 11.9167 10.082 11.9167H5.91537C4.7524 11.9167 4.17091 11.9167 3.69775 12.0602C2.63241 12.3834 1.79873 13.217 1.47556 14.2824C1.33203 14.7555 1.33203 15.337 1.33203 16.5M11.7487 5.25C11.7487 7.32107 10.0698 9 7.9987 9C5.92763 9 4.2487 7.32107 4.2487 5.25C4.2487 3.17893 5.92763 1.5 7.9987 1.5C10.0698 1.5 11.7487 3.17893 11.7487 5.25Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Login Link */}
        <a
          href="https://www.ezlicence.co.uk/learner/purchase-step/booking_credit"
          className="ez-login-link"
        >
          Log In
        </a>
      </div>
    </header>
  );
};

export default EzHeader;
