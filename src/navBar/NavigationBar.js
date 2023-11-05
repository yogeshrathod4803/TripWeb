import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <nav className="navbar">
      <button className="drawer-button hidden" onClick={toggleDrawer}>
        ☰
      </button>
      <div className="brand">
        <name>TripWeb </name>
      </div>
      <ul className={`menu ${showDrawer ? "show-mobile" : ""}`}>
        <li>flights</li>
        <li>Hotels</li>
        <li>Abouts</li>
        <li>Contacts</li>
      </ul>
      <div className="cart">
        <Link to="/reservations">
          <button>Reservations</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
