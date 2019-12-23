import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../Utils/MyButton";
class Discount extends Component {
  state = {
    start: 0,
    end: 25
  };
  porcentage = () => {
    if (this.state.start < this.state.end) {
      this.setState({
        start: this.state.start + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 50);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.start}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discoun_description">
              <h3>Purchase ticket before 18 June,2020</h3>
              <p>
                Regardless of the venue, musicians usually perform on a stage
                (if not actual then an area of the floor designated as such).
                Concerts often require live event support with professional
                audio equipment. Before recorded music, concerts provided the
                main opportunity to hear musicians pla
              </p>
              <MyButton />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
