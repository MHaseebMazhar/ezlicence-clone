import React from 'react';
import './Topbar.css';
const Topbar = () => {
  const HandleSupport = () => {
    window.location.href = "/support";
  }
  const HandleBlog = () => {
    window.location.href = "/blog";
  }
  const HandleIntructwithEzLicense = () => {
    window.location.href = "/instruct-with-ezlicence";
  }
  return (
    <div className="topbar">
      {/* Left Links */}
      <div className="topbar-left">
        <button className= "buttontop1" onClick={HandleSupport}>Support</button>
        <button className= "buttontop1" onClick={HandleBlog}>Blog</button>
        <button className="buttontop1" onClick={HandleIntructwithEzLicense} >Instruct with EzLicence</button>

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
