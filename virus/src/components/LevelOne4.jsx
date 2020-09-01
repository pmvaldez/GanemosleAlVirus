import React, { Fragment } from "react";
import "../styles/levelOne.css";
import ProgressNav from './ProgressNav'
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import covid from '../img/covid.png'
import corona from '../img/corona.png'
import coronagif from '../img/coronita.gif'


const levelOne4 = () => {
  const now = 100;

  return (
    <Fragment> 
      <div className="d-flex backgroundimg">
        <div className="section-mod1-general">    
          <ProgressNav/> 
          <div className="d-flex pl-4">
             <div>
            <img src={covid} width="25px" alt=""/>
            </div>
            <ProgressBar>
              <ProgressBar animated  striped variant="success" now={now} key={1} />
              <ProgressBar variant="warning" key={2} />
            </ProgressBar>  
            <div>
            <img src={corona} width="25px" alt=""/>
            </div>
          </div>
          <div className="container text-center mt-4 mb-4">
            <div class="p-4 ">
              <img src={coronagif} alt="" className="infoimg"/>
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

export default levelOne4;