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
  const HandleLearnerLogin = () => {
    window.location.href = "/ez-login";
  }
  const HandleInstructorLogin = () => {
    window.location.href = "/instructor-login";
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
        <button className="buttontop1" onClick={HandleLearnerLogin}>Learner Login</button>
        <button className="buttontop1" onClick={HandleInstructorLogin}>Instructor Login</button>
      </div>

    </div>
  );
};

export default Topbar;
