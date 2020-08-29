import React, { Component} from 'react'
import hootie from '../img/hootie.png'
import hootieTall from '../img/GAVHoo.png'
import '../styles/cardindex.css'
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 
class ModalHootie extends Component {
state={
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div className="contCard p-4" id="card">
        <h1 className="text-center">¿Que es?</h1>
        <div className="containerTeam d-flex flex-row justify-content-center align-self-center">
            <div className="d-flex flex-row flex-wrap">
              <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={hootie}  className="team " alt="jabon jabier" width="200" height="200"/></MDBBtn>
           </div>
           </div>
    <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader className="modalHotti" toggle={this.toggle(2)}>
          Hootie</MDBModalHeader> 
            <MDBModalBody className="modalHottie">
            <div className="d-flex flex-row container" >
                <div><img src={hootieTall} alt="Responsiveimg" width="200"/></div>
                <div>Personalidad: Sabio, calmo, equilibrado. 
                Sabe cuándo actuar y cuándo mantener distancia. 
                Es como el sensei de de Puma Espuma. 
                <br/>
                Siempre con el consejo adecuado
                en el momento correcto. Frente a coronavirus, se
                defiende con su amplio conocimiento y con la
                respuesta adecuada. Es quien guía al escuadrón
                Prevención.
                <br/>
                Frase típica: “El equilibrio está en ti.”
                </div>
            </div>
            </MDBModalBody >
    </MDBModal >
    </div>    
  );
  }  
}


export default ModalHootie;

