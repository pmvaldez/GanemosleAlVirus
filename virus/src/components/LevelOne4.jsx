import React, { Fragment } from "react";
import "../styles/levelOne.css";
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import covid from '../img/covid.png'
import corona from '../img/corona.png'
import covid4 from '../img/covid4.png'
import coronaWinner from '../img/coronita.gif'
import logoGAV from '../img/GAV_logo.png';
import { Modal } from 'react-bootstrap';

const LevelOne4 = () => {
 /*  console.log('diploma',props.name) */
 const [show, setShow] = React.useState(true);
 const [user, setUser] = React.useState('')
 
 const handleClose = () => setShow(false);
 const handleOpen = () => setShow(true);

 const handleInputChange = (event) => { 
     event.preventDefault()
     setUser(event.target.value)
 }
  const now = 100;

  return (
    <Fragment> 
      <div className="d-flex backgroundimg">
        <div className="section-mod1-general">    
        <div className="prog-bar-content d-flex pl-4 flex-wrap">
            <div className="processBar">
              <div >
              <img src={covid} width="50px" alt=""/>
              </div>
              <ProgressBar>
                <ProgressBar animated  striped variant="success" now={now} key={1} />
                <ProgressBar variant="info"  key={2} />
              </ProgressBar>  
              <div>
              <img src={corona} width="50px" alt=""/>
              </div>
          </div>
            <div> <img src={logoGAV} className="logoGame" alt="..." /></div>
          </div>
          <div className="container text-center mt-4 mb-4">
             <div className="p-4 whitebox" >
             <button className="btn btnModal " onClick={handleOpen}>
           Cambiar Nombre
          </button>   
                  <h1>Diploma</h1>
                  <h2>Se otorga el presente certificado a:</h2>
                  <h2>{user}</h2>
                  <h2>Por haber obtenido la primera corona en el modulo 1</h2>
                  <img src={covid4} className="logoGame" alt="..." />
                </div>
          </div>
          <div className="containernextButton">
            <div>
            <a href="/levelOne-3"><img src={atras} alt="" className="btnNext" /></a>
            </div>
            <div>
            <a href="/"><img src={adelante} alt="" className="btnNext"/></a>
            </div>
          </div>   
      </div>     
    </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
         <Modal.Body className="modalName" closeButton>
        <Modal.Title>¡Felicitaciones!</Modal.Title>
          <div>
          <img src={coronaWinner} className="coronaW" alt=""/>
          </div>
          <div>
          <p className="textModal">Ingresa tu nombre: </p>
          </div>
          <div>
          <form onSubmit={handleInputChange}>
            <input type="text" placeholder="Nombre" className="form-control" onChange={ e => setUser(e.target.value) } value={user}></input>
          </form>
        </div>
        <button className="btn btnModal " onChange={handleInputChange} onClick={handleClose}>
            Guardar
          </button>
        </Modal.Body>
      </Modal>

   </Fragment>  
  );
};

export default LevelOne4;