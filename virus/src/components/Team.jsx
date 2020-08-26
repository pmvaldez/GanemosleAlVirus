import React, { Fragment } from 'react'
import tomask from '../img/tomask.png'
import wantini from '../img/wantini.png'
import puma from '../img/puma.png'
import jabon from '../img/jabon.png'
import {Button, Modal} from 'react-bootstrap'
import '../styles/team.css'
import Buttons from './Buttons'

const Team = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>

        <Buttons />
        <div className="sectionTeam">
            <h1 className="text-center">Conoce al Escuadron Prevención</h1>
            <div className="containerTeam">
            <img src={tomask} className="team " alt="jabon jabier" width="300" height="200"/> <Button variant="secondary" onClick={handleShow}>+</Button>
            <img src={wantini} className="team" alt="wantini" width="200" height="250"/><Button variant="secondary" onClick={handleShow}>+</Button>
            <img src={puma} className="team" alt="pumar" width="304" height="400"/><Button variant="secondary" onClick={handleShow}>+</Button>
            <img src={jabon} className="team" alt="jabon jabier" width="200" height="236"/><Button variant="secondary" onClick={handleShow}>+</Button>    
            {/* <a href="#ex1" rel="modal:open"><img src={tomask} className="team " alt="jabon jabier" width="300" height="200"/></a>
            <a href="#ex2" rel="modal:open"><img src={wantini} className="team" alt="wantini" width="200" height="250"/></a>
            <img src={puma} className="team" alt="pumar" width="304" height="400"/>
            <img src={jabon} className="team" alt="jabon jabier" width="200" height="236"/> */}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>To Mask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={tomask} width="200" alt=""/> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam totam maxime libero temporibus quaerat dolores sint unde, nisi incidunt aliquam laudantium? Voluptatem nemo aliquam, neque necessitatibus accusantium nihil nostrum.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="btn-info">
                    Cerrar
                     </Button>
                </Modal.Footer>
            </Modal> 
            {/* <div id="ex1" className="modal">
                <h3>To Mask</h3>
                <img src={tomask} width="200" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A deleniti vel numquam, rem iure eos rerum ipsam? At, cumque? Quo debitis voluptatibus error assumenda obcaecati rem dolorem nemo unde at?</p>
                <a href="#Modal" rel="modal:close" className="btn-info btn">Close</a>
            </div>

            <div id="ex2" className="modal">
                <h3>Wantini</h3>
                <img src={wantini} width="150" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A deleniti vel numquam, rem iure eos rerum ipsam? At, cumque? Quo debitis voluptatibus error assumenda obcaecati rem dolorem nemo unde at?</p>
                <a href="#Modal" rel="modal:close" className="btn-info btn">Close</a>
            </div> */}
        </div>       

       
  

        </Fragment>
        
    )
}

export default Team
