import React, { Fragment } from 'react';
import "../styles/levelTwo.css";
import logoGAV from '../img/GAV_logo.png';
import Footer from './Footer';
import scuad from '../img/GAV_Personaje10.png'

const levelTwo = () => {
    return (
        <Fragment>
        <div className="d-flex backgroundimg">
            <div className="section-mod1-general">    
                <div className="prog-bar-content d-flex pl-4 flex-wrap">
                    <div> <img src={logoGAV} className="logoGame" alt="..." /></div>
                </div>
                <div className="container text-center mt-4 mb-4">
                    <div className="p-4 whitebox">
                        <h1 className="contenido-titulo">En proceso</h1>
                        <img src={scuad} className="img-fluid escuadronprev" width="350" alt="..." />
                    </div>    
                </div>
            </div>
        </div>
        <Footer />
    </Fragment>
    )
}

export default levelTwo
