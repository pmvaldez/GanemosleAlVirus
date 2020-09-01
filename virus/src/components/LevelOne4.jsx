import React, { Fragment } from "react";
import "../styles/levelOne.css";
//import ProgressNav from './ProgressNav'
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import covid from '../img/covid.png'
import corona from '../img/corona.png'
import logoGAV from '../img/GAV_logo.png';
//import coronagif from '../img/coronita.gif'


const LevelOne4 = (props) => {
  console.log('diploma',props.name)

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
                <ProgressBar variant="info" now={75} key={2} />
              </ProgressBar>  
              <div>
              <img src={corona} width="50px" alt=""/>
              </div>
          </div>
            <div> <img src={logoGAV} className="logoGame" alt="..." /></div>
          </div>
          <div className="container text-center mt-4 mb-4">
             <div className="p-4 whitebox" >
              {/* <img src={coronagif} alt="" className="infoimg"/> */}
                  <h1>Felicitaciones</h1>
                  <h2>Nombre:{props.name}</h2>
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
   </Fragment>  
  );
};

export default LevelOne4;