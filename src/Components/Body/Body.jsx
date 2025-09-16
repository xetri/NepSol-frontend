import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="hero-section">
      {/* Left side: Hero text */}
      <div className="hero-text">
        <h1>
          Turn your passion <br />
          into sustainable <br />
          income
        </h1>
        <p>
          Connect with supporters who believe in your work. Build a community
          that values your creativity and helps you thrive as a creator.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Start Creating</button>
          <button className="secondary-btn">Support Creators</button>
        </div>

        <div className="stats">
          <span>👥 50K+ creators</span>
          <span>❤️ 2M+ supporters</span>
          <span>⚡ $10M+ earned</span>
        </div>
      </div>

      {/* Right side: Card */}
      <div className="hero-card">
        <div className="profile-circle"></div>
        <div className="card-buttons">
          <button className="support-btn">🤍 Support</button>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Body;

