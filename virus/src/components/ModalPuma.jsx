import React, { Component} from 'react'
import puma from '../img/puma.png'
import hootieTall from '../img/GAVHoo.png'
import '../styles/modalhootie.css'
import {MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 
class ModalPuma extends Component {
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
    <div className="conthootie">
        <h1 className="text-center">¿Que es?</h1>
        <div className="containerTeam d-flex flex-row justify-content-center align-self-center">
            <div className="d-flex flex-row flex-wrap">
              <MDBBtn color="btn-primary-outline" onClick={this.toggle(3)}><img src={hootie}  className="team " alt="jabon jabier" width="200" height="200"/></MDBBtn>
           </div>
           </div>
    <MDBModal isOpen={this.state.modal2} toggle={this.toggle(3)}>
            <MDBModalBody className="modalHottie" >
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            <span className="btnModal" onClick={this.toggle(3)}>&times;</span>
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={puma} alt="Responsiveimg" width="200"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Hootie</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p>  
                Líder por naturaleza, valiente y aventurero,intrépido. 
                <br/>
                Le gusta hacer cosas nuevas y creativas.
                Enfrenta con valentía al coronavirus. Sin embargo,
                a veces su intrepidez le juega malas pasadas y se
                transforma en ansiedad.
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p> “¡Vamos tod@s junt@s ahora!”
                </div>
            </div>
            </MDBModalBody >
    </MDBModal >
    </div>    
  );
  }  
}


export default ModalPuma;

