import React, { useState } from "react";
import "./InstructorLogin.css";

export default function InstructorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

  return (
    <div className="il-container">
      {/* Left side */}
      <div className="il-left">
        
          <img
            src="/SilentSolhd-1.png"
            alt="EzLicence Logo"
            className="ezlogin-logo-img"
          />
        <h1 className="il-tagline">LEARN SAFE. LEARN EASY.</h1>
      </div>

      {/* Right side */}
      <div className="il-right">
        <div className="il-box">
          <h2 className="il-heading">Instructor Login</h2>
          <p className="il-register">
            Want to instruct with EzLicence?{" "}
            <a href="/" className="il-link">Register your interest</a>
          </p>

          <form onSubmit={handleSubmit}>
            <label className="il-label">Email address</label>
            <div className="il-input-group">
              <span className="il-icon">📧</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="il-input"
              />
            </div>

            <label className="il-label">Password</label>
            <div className="il-input-group">
              <span className="il-icon">🔒</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="il-input"
              />
            </div>

            <div className="il-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="il-checkbox"
              />
              <span className="il-remember-text">Remember me for 60 days</span>
            </div>

            <button type="submit" className="il-btn">
              Login
            </button>

            <div className="il-forgot">
              <a href="/" className="il-link">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
