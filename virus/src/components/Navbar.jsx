import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../img/logotipo.jpg'
import '../styles/navbar.css';


const Navbar = () => {
    return (
        <div className="navbar ">
        <Link to="/" className="navbar-brand mx-auto"> <img src={logo} width="110" height="50" alt=""/></Link>
        <div>
            <div className="d-flex">
                <NavLink 
                    className="btn btn-nav mr-2" 
                    to="/"
                    exact
                >
                    Inicio
                </NavLink>
                <NavLink 
                    className="btn btn-nav mr-2" 
                    to="/admin"
                >
                    Admin
                </NavLink>
                <NavLink 
                    className="btn btn-nav" 
                    to="/login"
                >
                    Login
                </NavLink>
            </div>
        </div>
    </div>
    )
}

export default Navbar
