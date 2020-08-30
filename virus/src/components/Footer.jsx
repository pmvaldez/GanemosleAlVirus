import React from 'react'
import logofooter from '../img/logofooter.jpg'
import '../styles/footer.css'
import { MDBFooter } from 'mdbreact'

const Footer = () => {
    return (
    <MDBFooter>
        <div className="d-flex flex-row">
            <div style={{width:'70%', backgroundColor:"#662499", color:'white', paddingTop:'15px'}}>hecho con amor</div>
            <div style={{width:'30%'}}><img src={logofooter} alt="" style={{width:'50%'}} className="logofooter"/></div>
        </div>
    </MDBFooter>
    )
}

export default Footer
