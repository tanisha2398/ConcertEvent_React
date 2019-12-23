import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.841092090656!2d75.6123173!3d24.937482799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba1d0010d65c5d2e!2sAnupratap%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1577102370461!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
