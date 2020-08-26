import React, { Component, Fragment} from 'react'
import tomask from '../img/tomask.png'
import wantini from '../img/wantini.png'
import puma from '../img/puma.png'
import jabon from '../img/jabon.png'
import CardIndex from './CardIndex'
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBContainer } from 'mdbreact';
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
    <MDBContainer className="sectionTeam" id="team">
{/*         <div class="card-columns">
                <h1>¿Qué es?</h1>
</div> */}
        <CardIndex />
        <h1 className="text-center">Conoce al Escuadron Prevención</h1>
        <div className="containerTeam">
            <img src={tomask} className="team " alt="jabon jabier" width="300" height="200"/> <MDBBtn color="primary" onClick={this.toggle(2)}>+</MDBBtn>
            <img src={wantini} className="team" alt="wantini" width="200" height="250"/><MDBBtn color="primary" onClick={this.toggle(2)}>+</MDBBtn>
            <img src={puma} className="team" alt="pumar" width="304" height="400"/><MDBBtn color="primary" onClick={this.toggle(2)}>+</MDBBtn>
            <img src={jabon} className="team" alt="jabon jabier" width="200" height="236"/><MDBBtn color="primary" onClick={this.toggle(2)}>+</MDBBtn>{/* <Button variant="secondary" onClick={handleShow}>+</Button>  */}   
        </div>
    <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)} style={{color: 'red'}}>Puma Espuma</MDBModalHeader>
            <MDBModalBody style={{ backgroundColor: 'blue',}}>
            <div className="container">
                <div><img src={puma} width="200px" alt=""  /></div>
                <div>Nombre: Puma Espuma
                Edad: 7 años
                Caracteristicas: Es alegre y siempre ve el lado positivo de las cosas, ayuda a u sus amigos
                en todo momento.
                Mision: Guiar al Escuadrón Prevención y ¡combatir juntos el virus!</div>
            </div>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle(2)}>cerrar</MDBBtn>
            </MDBModalFooter>
    </MDBModal>
    </MDBContainer>    
  );
  }  
}


//export default Team

export default ModalPage;

