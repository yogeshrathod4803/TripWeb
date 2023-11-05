import React from "react";
import "./SideFilterBar.css";

const SideFilterBar = ({ setCategoryFilter }) => {
  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="side-filter-bar">
      <h2>Filter Options</h2>
      <div className="filter-section">
        <h3>Category</h3>
        <label>
          <input
            type="checkbox"
            value="Tour"
            onChange={() => handleCategoryFilterChange("Tour")}
          />
          Tours
        </label>
        <label>
          <input
            type="checkbox"
            value="Attraction"
            onChange={() => handleCategoryFilterChange("Attraction")}
          />
          Attractions
        </label>
        <label>
          <input
            type="checkbox"
            value="Day Trip"
            onChange={() => handleCategoryFilterChange("Day Trip")}
          />
          Day Trips
        </label>
        <label>
          <input
            type="checkbox"
            value="Nature & Wildlife"
            onChange={() => handleCategoryFilterChange("Nature & Wildlife")}
          />
          Nature & Wildlife
        </label>
      </div>
      <div className="filter-section">
        <h3>Price Range(disabled)</h3>
        <label>
          <input type="radio" name="price" />
          Low
        </label>
        <label>
          <input type="radio" name="price" />
          Medium
        </label>
        <label>
          <input type="radio" name="price" />
          High
        </label>
      </div>
    </div>
  );
};

export default SideFilterBar;
