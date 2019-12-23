import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlight />
      <Pricing />
      <Location />
    </div>
  );
}

export default App;
