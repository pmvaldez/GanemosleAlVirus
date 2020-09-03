import React, { Fragment } from 'react'
import '../styles/download.css'
import { MDBIcon } from "mdbreact";
import covid from '../Files/pintaCovid.pdf';
import guantrini from '../Files/pintaGuantrini.pdf';
import hootie from '../Files/pintaHootie.pdf';
import jabon from '../Files/pintaJABON.pdf';
import puma from '../Files/pintaPuma.pdf';
import tomas from '../Files/pintaTomask.pdf';
import Footer from './Footer'
import logoGAV from '../img/GAV_logo.png';
import scuad from '../img/GAV_Personaje10.png'

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
                    <h1 className="contenido-titulo">Bienvenidos amig@s</h1>
                    <h1 className="contenido-texto">Descarga y pinta tus personajes favoritos</h1> 
                    <img src={scuad} className="img-fluid escuadronprev" width="350" alt="..." />
                    <div>
                        <a href={covid} download rel="noopener noreferrer" target="_blank" >
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
                        </a>      
                        <a href={guantrini} download rel="noopener noreferrer" target="_blank" >
                        
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
                   
                        </a>      
                        <a href={hootie} download rel="noopener noreferrer" target="_blank" >
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
                        </a>      
                        <a href={jabon} download rel="noopener noreferrer" target="_blank" >
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
                        </a>      
                        <a href={puma} download rel="noopener noreferrer" target="_blank" >
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
                        </a>      
                        <a href={tomas} download rel="noopener noreferrer" target="_blank" >
                        <MDBIcon icon="cloud-download-alt" size="3x" className="amber-text pr-3"/>
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

