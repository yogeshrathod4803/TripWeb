import React from "react";
import { Routes, Route } from "react-router-dom";
import TripWeb from "./tripWeb/tripWeb";
import Reservation from "./reservations/Reservation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TripWeb />} />

        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
