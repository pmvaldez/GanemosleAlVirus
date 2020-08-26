import React from "react";
import { MDBCard, MDBCardTitle, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import hootie from '../img/hootie.png'

const CardIndex = () => {
  return (
      <MDBCard style={{ maxWidth: "22rem", text: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
        <MDBCardImage src={hootie} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">¿Que es?</MDBCardTitle>
          <MDBCardText>
          Ganémosle al Virus es una plataforma informativa y educativa que funciona como herramienta para que padres 
          y tutores puedan enseñar a los niños bajo su cuidado a entender qué está sucediendo en la actualidad en el 
          contexto de la pandemia del COVID-19 y dar técnicas de autocuidado para poder hacerle frente al virus.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  );
}

export default CardIndex;