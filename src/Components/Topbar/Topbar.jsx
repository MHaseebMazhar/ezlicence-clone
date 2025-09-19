import React from 'react';
import './Topbar.css';
const Topbar = () => {
  return (
    <div className="topbar">
      {/* Left Links */}
      <div className="topbar-left">
        <a href="https://www.ezlicence.co.uk/">Support</a>
        <a href="https://www.ezlicence.co.uk/">Blog</a>
        <a href="https://www.ezlicence.co.uk/">Instruct with EzLicence</a>

      </div>

      {/* Right Links */}
      <div className="topbar-right">
        <a href="https://www.ezlicence.co.uk/">Learner Login</a>
        <a href="https://www.ezlicence.co.uk/">Instructor Login</a>
      </div>

    </div>
  );
};

export default Topbar;
