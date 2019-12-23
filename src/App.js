import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlight from "./components/Highlights";
function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlight />
    </div>
  );
}

export default App;
