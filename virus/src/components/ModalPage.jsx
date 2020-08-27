import React, { Component } from 'react';
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBContainer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import puma from '../img/puma.png'

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
    <MDBContainer>
      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)} style={{color: 'red'}}>Puma Espuma</MDBModalHeader>
        <MDBModalBody style={{ backgroundColor: 'blue',}}>
          <div className="container">
          <div><img src={puma} width="200px"  /></div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</div>
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

export default ModalPage;