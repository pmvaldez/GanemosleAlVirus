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
              <div className="col-md-4 w-3">
                <h1>BIENVENIDA/O AL MODULO 1</h1>
                <p>Hola, soy Hootie y junto a Puma Espuma y el Escuadron Prevención conoceras sobre el Covid-19 y como juntos podemos cuidarnos</p>
                <p>Pon mucha atención a cada una de las etapas para quitarle la corona al covid y habrà una sorpresa al final</p>
                <p>Vamos a ganar!!!</p>
              </div>
            </div>
  )
}

export default levelOneContenido1



