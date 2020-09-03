import React, { Fragment } from 'react'
import '../styles/download.css'
import { MDBIcon } from "mdbreact";
import covid from '../Files/pintaCovid.pdf';
import guantrini from '../Files/pintaGuantrini.pdf';
import hootie from '../Files/pintaHootie.pdf';
import jabon from '../Files/pintaJABON.pdf';
import puma from '../Files/pintaPuma.pdf';
import tomas from '../Files/pintaTomask.pdf';
import "../styles/levelOne.css";
import Footer from './Footer'
import logoGAV from '../img/GAV_logo.png';

const Download = () => {

return (
<Fragment> 
<div className="d-flex backgroundimg">
  <div className="section-mod1-general">    
  <div className="prog-bar-content d-flex pl-4 flex-wrap">
      <div> <img src={logoGAV} className="logoGames" alt="..." /></div>
    </div>
    <div className="container text-center mt-4 mb-4">
      <div className="p-4 whitebox">
      <h1 className="contenido-titulo">Hola Amig@s</h1>
      <div className="sectionDownload">
            <h1>Descarga y pinta tus personajes</h1> 

            <a href={covid} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
            <a href={guantrini} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
            <a href={hootie} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
            <a href={jabon} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
            <a href={puma} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
            <a href={tomas} download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      
                  

        </div>
      </div>
    </div>
</div>        
</div>
<Footer />
</Fragment> 
    )
}

export default Download
