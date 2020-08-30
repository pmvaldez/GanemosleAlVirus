import React, { Fragment } from "react"
import "../styles/levelOne.css";
import Game from './Game';
import ProgressNav from './ProgressNav'
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import ProgressBar from 'react-bootstrap/ProgressBar';


const levelOne3 = () => {
  const now = 100;
  return (
    <Fragment> 
    <div className="d-flex backgroundimg">
      <div className="section-mod1-general">    
        <ProgressNav/> 
        <ProgressBar>
          <ProgressBar animated  striped variant="success" now={now} key={1} />
          <ProgressBar variant="warning" key={2} />
        </ProgressBar>  
        <div className="container text-center mt-4 mb-4">
          <div class="p-4 whitebox">
            <Game />
          </div>
        </div>
        <div className="containernextButton">
          <div>
          <a href="/levelOne-2"><img src={atras} alt="" className="btnNext" /></a>
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
export default levelOne3;