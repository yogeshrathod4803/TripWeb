import React from "react";
import Email from "../assets/email.png";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center p-3">
        <div className="img-description">
          <img src={Email} alt="Email" />
          <div className="desc">
            <h2>Your Travel Journey Starts Here</h2>
            <p>Sign up and we'll send the best deals to you</p>
          </div>
        </div>
        <div className="Submit-email">
          <input type="text" placeholder="Your Email" />
          <button>Subcribe</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
