import React from "react";
import "./styles/Principal.css";

class PrincipalNoUsuario extends React.Component {
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

export default PrincipalNoUsuario;
