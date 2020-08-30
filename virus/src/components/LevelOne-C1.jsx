import React from "react";
import "../styles/levelOne.css";
import personajehootie from '../img/GAV_Personaje21.png';

const levelOneContenido1 = () => {
  return (
    <div className="row">
              <div class="col-md-4">
                <img
                  src={personajehootie}
                  className="img-fluid"
                  alt="hootie"
                />
              </div>
              <div className="col-md-4">HOLA ACA VA LA BIENVENIDA DE HOOTIE</div>
            </div>
  )
}

export default levelOneContenido1


