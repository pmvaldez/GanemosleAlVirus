import React from 'react';
import '../styles/home-gav.css';
import logoGAV from '../img/GAV_logo.png';
import Buttons from './Buttons'

const HomeGAV = () => {
    return (
      <div className="sectionGAV">
        <img src={logoGAV} className="img-fluid logogav" alt="Responsiveimg" />
        <a href="#team" className="btn btn-info">+</a>
      <Buttons />
            
      </div>

      
    )
}

export default HomeGAV