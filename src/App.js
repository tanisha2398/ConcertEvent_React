import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "blue" }}>
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;
