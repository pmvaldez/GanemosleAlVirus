import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../img/logotipo.jpg'
import '../styles/navbar.css';
import '../index.css';
import { MDBBtn } from "mdbreact";

const Navbar = () => {
    return (
        <div className="nav p-4 d-flex flex-wrap">
            <div className="d-flex ordertwo">    
                <NavLink to="/admin">
                    <MDBBtn gradient="purple" className="peachBott">PARA TUTORES</MDBBtn>
                </NavLink>
            </div>
            <div className="mx-auto orderOne" >
                <Link to="/" className="navbar-brand hootielogo"> <img src={logo} width="150" alt=""/></Link>
            </div>
        </div>
    )
}

export default Navbar
//export default ButtonPage;