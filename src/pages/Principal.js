import React from "react";
import "./styles/Principal.css";
import CardsRestaurante from "../components/CardsRestaurante";

class Principal extends React.Component {
  render() {
    return (
      <div>
        <div class="parallax"></div>

        <div className="box ">
          <CardsRestaurante />
          
        </div>
      </div>
    );
  }
}

export default Principal;
