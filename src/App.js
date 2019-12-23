import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>

      <Element name="VenueInfo">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>

      <Element name="Location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
