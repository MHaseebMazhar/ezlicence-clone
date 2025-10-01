import React, { useState } from "react";
import "./EzLogin.css";

export default function EzLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}, Remember: ${remember}`);
  };

  return (
    <div className="ezlogin-container">
      {/* Left side - Logo and tagline */}
      <div className="ezlogin-left">
 
          <img
            src="/SilentSolhd-1.png"
            alt="EzLicence Logo"
            className="ezlogin-logo-img"
          />
     
        <h1 className="ezlogin-tagline">LEARN SAFE. LEARN EASY.</h1>
      </div>

      {/* Right side - Login form */}
      <div className="ezlogin-right">
        <form className="ezlogin-form" onSubmit={handleSubmit}>
          <h2 className="ezlogin-title">Learner Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="ezlogin-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me for 60 days
          </label>

          <button type="submit" className="ezlogin-btn">
            Login
          </button>

          <a href="/" className="ezlogin-forgot">
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
}
