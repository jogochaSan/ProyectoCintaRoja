import React from "react";
import "./../components/styles/CardRestaurante.css";
import "bootstrap/dist/css/bootstrap.min.css";
class cardRestaurante extends React.Component {
  render() {
    return (
      <div>
        <div class="main">
          <div class="card">
            <div class="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg/1199px-Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg" />
            </div>
            <div class="title">
              <h1>Write title Here</h1>
            </div>
            <div class="des">
              <p></p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cardRestaurante;
