import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      {/* Left: Logo and Brand */}
      <div className="logosection">
        <img src={logo} alt="logo" className="logo" />
        <span className="brand-name">NEPSOL</span>
      </div>

      {/* Right section: Search bar + nav links + buttons */}
      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Search creators..." />
          <FaSearch className="search-icon" />
        </div>

        <ul>
          <li>Explore</li>
          <li>How it works</li>
        </ul>

        <div className="nav-buttons">
          
          <button className="getstarted-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
