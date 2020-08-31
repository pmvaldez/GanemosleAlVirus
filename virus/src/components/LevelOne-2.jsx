import React, { Fragment } from "react"
import "../styles/levelOne.css";
import ProgressNav from './ProgressNav'
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import info from "../img/infohootie.jpg"
const levelOne2 = () => {
  const now = 75;
  return (
    <Fragment> 
      <div className="d-flex backgroundimg">
        <div className="section-mod1-general">    
          <ProgressNav/> 
          <ProgressBar>
            <ProgressBar animated  striped variant="success" now={now} key={1} />
            <ProgressBar variant="warning" now={25} key={2} />
          </ProgressBar>  
          <div className="container text-center mt-4 mb-4">
            <div class="p-4 whitebox">
              <img src={info} alt= ""/>
            </div>
          </div>
          <div className="containernextButton">
            <div>
            <a href="/levelOne-1"><img src={atras} alt="" className="btnNext" /></a>
            </div>
            <div>
            <a href="/levelOne-3"><img src={adelante} alt="" className="btnNext"/></a>
            </div>
          </div>   
      </div>        
    </div>
      <Footer />
   </Fragment>  
  );
};
export default levelOne2;