import React, { Fragment } from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import adelante from '../img/adelante.svg';
import LevelOneC1 from './LevelOne-C1'



const levelOne = () => {
  return (
    <Fragment>  
    <div className="d-flex backgroundimg">
      <div className="section-mod1-general">
        <ProgressBar />

        <div className="container text-center mt-4 mb-4">
          <div class="d-inline-flex p-4 whitebox">
            <LevelOneC1/>
          </div>
        </div>

        <div className=".containernextButton">
                 <Link to="/levelOne-1" className="link">
                     <button className="btnNext">
                          <img src={adelante}  alt='next' width='center'/>
                     </button>
                 </Link>
            </div> 
            

        </div>        
      </div>
    
    <Footer />
   </Fragment>  
  );
};

export default levelOne;


