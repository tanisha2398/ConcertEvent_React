import React, { Component } from "react";
import Slide from "react-reveal/Slide";
class CountDown extends Component {
  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Events start in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">2</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">20</div>
              <div className="countdown_tag">Mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">30</div>
              <div className="countdown_tag">Secs</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
export default CountDown;
