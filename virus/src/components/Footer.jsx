import React from 'react'
import logofooter from '../img/logofooter.jpg'
import '../styles/footer.css'
import { MDBFooter, MDBIcon } from 'mdbreact'

const Footer = () => {
    return (
    <MDBFooter>
        <div className="d-flex flex-row contFoo">
            <div className="context">Hecho con amor <MDBIcon icon="heart" /></div>
            <div className="contlogo"><img src={logofooter} alt="logofooter" className="logofooter"/></div>
        </div>
    </MDBFooter>
    )
}

export default Footer
