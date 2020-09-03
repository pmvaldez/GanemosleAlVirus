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
import escuadrondiplo from '../img/GAV_Personaje10.png'
import ribbon from '../img/award-solid.svg'
import { Modal } from 'react-bootstrap';

const LevelOne4 = () => {
 /*  console.log('diploma',props.name) */
 const [show, setShow] = React.useState(false);
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
        <div className="prog-bar-content mt-0 d-flex pl-4 flex-wrap">
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

          <div className="contGeneralD text-center mt-4 mb-4">
              <div className="alert alert-primary diploma p-5">
                <img src={ribbon} className="ribbon" width="30" alt="..." />
                <h1 className="diplo-title">Diploma</h1>
                <h2 className="diplo-title1">Se otorga el presente certificado a:</h2>
                <div className="contNameDiplo">
                  <h2 className="diplo-nombre">{user}</h2>
                </div>
                <h2 className="diplo-title1">Por haber obtenido la primera corona en el Módulo 1.</h2>
                <img src={escuadrondiplo} className="img-fluid escuadronprev" width="200" alt="..." />
              </div>
              <div className="p-4 whitebox-4" >
                <img src={corona} className="coronaM1" alt="..." />
                <button className="btnName " onClick={handleOpen}>Cambiar Nombre</button>
                <img src={covid4} className="covidPurple" alt="..." />
                  
                 
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
        <button className="btnModal " onChange={handleInputChange} onClick={handleClose}>
            GUARDAR
          </button>
        </Modal.Body>
      </Modal>

   </Fragment>  
  );
};

export default LevelOne4;