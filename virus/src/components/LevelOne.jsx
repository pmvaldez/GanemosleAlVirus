import React, { Fragment } from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
//import ProgressBar from './ProgressBar'
//import Footer from './Footer'
import adelante from '../img/adelante.svg';

const levelOne = () => {

  return (

  <Fragment>

    <div className="d-flex">
        <div className="section-mod1-general">
            {/* <h1>Etapa 1: ¿Que es el Covid-19?</h1> */}
              
{/*<ProgressBar/>*/}
    
      {/* <Footer/> */}
    </div>
    <div className=".containernextButton">
                 <Link to="/levelOne-1" className="link">
                     <button className="btnNext">
                          <img src={adelante}  alt='next' width='center'/>
                     </button>
                 </Link>
            </div> 
        </div>

  </Fragment>
  
  );
};
export default levelOne;

