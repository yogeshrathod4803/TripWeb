import React from "react";
import NavigationBar from "../navBar/NavigationBar";
import HeroSection from "../heroSections/HeroSection";
import Destinations from "../destinations/Destinations.js";
import Footer from "../footer/Footer.js";

const TripWeb = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <div className="content-container">
        <Destinations />
      </div>
      <Footer />
    </>
  );
};

export default TripWeb;
