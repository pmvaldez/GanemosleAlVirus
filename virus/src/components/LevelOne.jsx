import React, { Fragment } from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
import ProgressNav from './ProgressNav'
import Footer from './Footer'
import adelante from '../img/adelante.svg';
//import LevelOneC1 from './LevelOne-C1'
import LevelOneC2 from './LevelOne-C2';
import ProgressBar from 'react-bootstrap/ProgressBar';


const levelOne = () => {
  const now = 25;

  return (
    <Fragment> 
      <div className="d-flex backgroundimg">
        <div className="section-mod1-general">    
          <ProgressNav/> 
          <ProgressBar>
            <ProgressBar animated  striped variant="success" now={now} label={`${now}%`}  key={1} />
            <ProgressBar variant="warning" now={75} key={2} />
          </ProgressBar>  
          <div className="container text-center mt-4 mb-4">
            <div class="p-4 whitebox">
              <LevelOneC2/>
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


