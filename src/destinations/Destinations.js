import React, { useEffect, useState } from "react";
import "./Destination.css";
import Data from "../data/data.json";
import Star from "../assets/rateStar.png";
import SideFilterBar from "../sideFilterBar/SideFilterBar.js";

const Destinations = () => {
  const [cardData, setCardData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(""); // Add state for category filter

  useEffect(() => {
    try {
      setCardData(Data.apiDataPart);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = categoryFilter
    ? cardData.filter((tour) => tour.category === categoryFilter)
    : cardData;

  return (
    <div className="destinations-container">
      <div className="side-filter-bar">
        <SideFilterBar setCategoryFilter={handleCategoryFilterChange} />
      </div>

      <div className="destination-cards">
        {filteredData.map((tour, index) => (
          <div className="destination-card" key={index}>
            <div className="destination-image">
              <img src={tour.img} alt="Destination" className="card-img" />
            </div>
            <div className="destination-details">
              <div>
                <p className="duration-tour">
                  {tour.duration} <span className="colored-bullet">●</span>
                  {tour.tour}
                </p>
              </div>

              <div>
                <h3 className="destination-name">{tour.destination}</h3>
                <p className="destination-description">{tour.Country_name}</p>
              </div>

              <div className="measures">
                <p className="safety">Take safety measures</p>
                <h4 className="cancelation">Free cancellation</h4>
              </div>
            </div>
            <div className="destination-footer">
              <div className="reviews">
                <span className="star">
                  <img src={Star} alt="ratingStar" />
                  <img src={Star} alt="ratingStar" />
                  <img src={Star} alt="ratingStar" />
                  <img src={Star} alt="ratingStar" />
                  <img src={Star} alt="ratingStar" />
                </span>
                <p className="reviews-count">{tour.reviews} Reviews</p>
              </div>

              <div className="price-reservation">
                <h3 className="destination-price">${tour.price}</h3>
                <button className="explore-button">Reserve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
