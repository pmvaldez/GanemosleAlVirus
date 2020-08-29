import React from 'react';
import '../styles/home-gav.css';
import logoGAV from '../img/GAV_logo.png';
import arrow from '../img/arrow-204-32.png';

const HomeGAV = () => {
    return (
      <div className="sectionGAV">
        <div>
        <img src={logoGAV} className="img-fluid mt-2 logogav" alt="Responsiveimg" />
        </div>
        <div className="arrowone">
        <a href="#card" className="arrow"><img src={arrow} alt=""/></a>
        </div>           
      </div>
    )
}
export default HomeGAV
