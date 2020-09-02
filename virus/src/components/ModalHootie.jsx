import React, { Component} from 'react'
import hootie from '../img/hootie.png'
import hootieTall from '../img/GAVHoo.png'
import QueEs from '../img/que-es.svg'
import '../styles/modalhootie.css'
import {MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';
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
    <div className="conthootie text-center">
        {/* <h1 className="text-center">¿Que es?</h1> */}
        <img src={QueEs} className="img-fluid imgWhat" alt="Responsiveimg" width='300' />
        <div className="containerTeam d-flex flex-row justify-content-center align-self-center">
            <div className="d-flex flex-row flex-wrap">
              <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={hootie}  className="team hootieWhat" alt="" width="200" height="200"/></MDBBtn>
           </div>
           </div>
    <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
            <MDBModalBody className="modalHottie" >
            <span className="btnModal" onClick={this.toggle(2)}>&times;</span>
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={hootieTall} alt="Responsiveimg" width="200"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Hootie</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p> Sabio, calmo, equilibrado. 
                Sabe cuándo actuar y cuándo mantener distancia. 
                Es como el sensei de de Puma Espuma. 
                <br/>
                Siempre con el consejo adecuado
                en el momento correcto. Frente a coronavirus, se
                defiende con su amplio conocimiento y con la
                respuesta adecuada. Es quien guía al escuadrón
                Prevención.
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p> “El equilibrio está en ti.”
                </div>
            </div>
            </MDBModalBody >
    </MDBModal >
    
    </div>    
  );
  }  
}


export default ModalHootie;

