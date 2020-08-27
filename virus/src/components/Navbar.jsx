import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../img/logotipo.jpg'
import '../styles/navbar.css';
import { MDBBtn } from "mdbreact";

const Navbar = () => {
    return (
        <div className="nav p-4">
            <div className="d-flex">    
                <NavLink to="/admin">
                    <MDBBtn gradient="peach" className="peachBott">PARA TUTORES</MDBBtn>
                </NavLink>
            </div>
            <div className="mx-auto" >
                <Link to="/" className="navbar-brand mx-auto"> <img src={logo} width="150" alt=""/></Link>
            </div>
        </div>
    )
}

export default Navbar
//export default ButtonPage;