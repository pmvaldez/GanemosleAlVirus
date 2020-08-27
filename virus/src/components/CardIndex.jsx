import React from "react";
import '../styles/cardindex.css'

import hootie from '../img/hootie.png'

const CardIndex = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-self-center p-5">
      <div className="mx-auto p-4">
        <img src={hootie} alt="Responsiveimg" width="250" />
      </div>

      <div className="mx-auto card-text-cont">
        <p className="card-text">
          Ganémosle al Virus es una plataforma informativa y educativa que
          funciona como herramienta para que padres y tutores puedan enseñar a
          los niños bajo su cuidado a entender qué está sucediendo en la
          actualidad en el contexto de la pandemia del COVID-19 y dar técnicas
          de autocuidado para poder hacerle frente al virus.
        </p>
      </div>
    </div>
  );
}

export default CardIndex;