import React from "react";
import '../styles/cardindex.css'
import arrow from '../img/arrow-204-32.png';
import ModalHootie from '../components/ModalHootie'

const CardIndex = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-self-center contCard p-4" id="card">
      <ModalHootie />       
      <div className="mx-auto card-text-cont">
        <p className="card-text">
          Ganémosle al Virus es una plataforma informativa y educativa que
          funciona como herramienta para que padres y tutores puedan enseñar a
          los niños bajo su cuidado a entender qué está sucediendo en la
          actualidad en el contexto de la pandemia del COVID-19 y dar técnicas
          de autocuidado para poder hacerle frente al virus.
        </p>
      </div>
      <div className="arrowone d-flex flex-column justify-content-center align-self-center">
        <div>
          <a href="#team" className="arrow"><img src={arrow} alt=""/></a>
        </div>
        </div>  
    </div>
  );
}

export default CardIndex;