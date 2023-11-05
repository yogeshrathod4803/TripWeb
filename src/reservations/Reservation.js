import React from "react";
import "../reservations/Reservation.css";

function Reservations() {
  return (
    <div className="reservations-container">
      <div>
        <h2>Your Reservations:</h2>
        <div className="image-container">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c1a552112421559.Y3JvcCwxMzczLDEwNzQsMzMsMA.jpg"
            alt="Empty Reservations"
          />
        </div>
      </div>
    </div>
  );
}

export default Reservations;
