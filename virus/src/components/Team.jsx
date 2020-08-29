import React, { Component} from 'react'
import tomask from '../img/tomask.png'
import wantini from '../img/wantini.png'
import puma from '../img/puma.png'
import jabon from '../img/jabon.png'
import '../styles/team.css'
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 
class ModalPage extends Component {
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
    <div className="sectionTeam" id="team">
        <h1 className="text-center">Conoce al Escuadron Prevención</h1>
        <div className="containerTeam d-flex flex-row justify-content-center align-self-center">
          <div className="d-flex flex-row flex-wrap">
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={tomask} className="team " alt="jabon jabier" width="300" height="200"/></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={wantini} className="team" alt="wantini" width="200" height="250"/></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)} style={{height: '60vh'}} ><img src={puma} className="team" alt="pumar" width="304" height="400"/></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={jabon} className="team" alt="jabon jabier" width="200" height="236"/></MDBBtn>   
          </div>
        </div>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
          <MDBModalHeader className="modalTeamOne" toggle={this.toggle(2)}>Hootie</MDBModalHeader> 
          <MDBModalBody className="modalTeam">
            <div className="d-flex flex-row container" >
              <div><img src={puma} alt="Responsiveimg" width="200"/></div>
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

export default ModalPage;

