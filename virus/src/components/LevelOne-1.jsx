import React from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
//import Footer from './Footer'
import adelante from '../img/adelante.svg';

const levelOne1 = () => {
  return (
    <div className="d-flex">
      <div className="section-mod1-general">
        {/* <h1>Etapa 1: ¿Que es el Covid-19?</h1> */}
       <div className="containernextButton">
          <Link to="/levelOne-2" className="link">
            <button className="btnNext">
             <img src={adelante}  alt='next' width='110'/>
            </button>
          </Link>
        </div> 
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default levelOne1;
