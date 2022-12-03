import React, { Component } from "react";
import "./main.css";
class Main extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="container">
            <div className="center">
              <h4>Our Features</h4>
              <h1>Features For Our Client For Your Event</h1>
            </div>
            <div className="card-body">
              <div className="cards">
                <div  className="card">
                  <i class="fa-solid fa-file-invoice"></i>
                  <h3>Confirm Speakers</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio exercitationem eveniet eaque veniam ea consectetur.
                  </p>
                  <a href="#">Read more</a>
                </div>
                <div className="card">
                <i class="fa-regular fa-lightbulb-on"></i>
                  <h3>Best Digital Ideas</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio exercitationem eveniet eaque veniam ea consectetur.
                  </p>
                  <a href="#">Read more</a>
                </div>
                <div className="card">
                  <i className="fa-duotone fa-people"></i>
                  <h3>Networking People</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio exercitationem eveniet eaque veniam ea consectetur.
                  </p>
                  <a href="#">Read more</a>
                </div>
                <div className="card">
                  <i className="fa-solid fa-note"></i>
                  <h3>Inspiring Keyotes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio exercitationem eveniet eaque veniam ea consectetur.
                  </p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="center">
              <h4>Our Speakers</h4>
              <h1>Speakers Who Are Exparts in Their Fields</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
