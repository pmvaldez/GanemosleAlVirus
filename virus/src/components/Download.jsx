import React, { Fragment } from 'react'
import Footer from './Footer'
import '../styles/download.css'
import NavbarPage from './NavbarPage'
import { MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import '../Files/pintaCovid.pdf'
const Download = () => {

 
    return (
    <Fragment>
        <NavbarPage />
        <div className="sectionDownload">
            <h1>Descarga y pinta tus personajes</h1> 

            <a href="https://drive.google.com/file/d/16J-p-djFmyCggRusUSBpcCdEYaP60Np_/view?usp=sharing" download rel="noopener noreferrer" target="_blank" >
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </a>      

             
            <Link path="../Files/pintaCovid.pdf" download target="_blank" rel="noopener noreferrer">
            <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
            </Link>       

        </div>
        <Footer />
    </Fragment>
    )
}

export default Download
