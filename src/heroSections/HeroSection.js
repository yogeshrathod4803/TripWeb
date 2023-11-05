import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-img">
        <h1 className="hero-title">Tours in London</h1>
        <div className="search-bar">
          <div className="search-bar-inner">
            <input
              type="text"
              id="destination"
              className="search-input"
              placeholder="Where are you going?"
            />
            <input
              type="date"
              id="checkin"
              className="date-input"
              placeholder="Check-in"
            />
            <input
              type="date"
              id="checkout"
              className="date-input"
              placeholder="Check-out"
            />
            <select id="guests" className="guests-select">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
            </select>
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
