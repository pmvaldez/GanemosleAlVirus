import React from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
//import ProgressBar from './ProgressBar'
//import Footer from './Footer'
import mod2 from '../img/mod2.svg';

const levelOne3 = () => {
  return (
    <div className="d-flex">
      <div className="section-mod1-general">
        {/* <h1>Etapa 1: ¿Que es el Covid-19?</h1> */}
        <div className="containerAllBtn">
                    <Link  to="/levelTwo" className="link">
                        <button className="btnTwo">
                            <img src={mod2}  alt='wantini' width='100'/>                             
                        </button>
                    </Link>
        </div>
{/*<ProgressBar/>*/}
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default levelOne3;