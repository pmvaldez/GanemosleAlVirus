import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, } from "mdbreact";
import logo from '../img/logotipo.jpg';
import '../styles/navbar.css';
import '../index.css';

class NavbarPage extends Component {
constructor(props) {
  super(props);
  this.state = {
      collapse: false,
  };
  this.onClick = this.onClick.bind(this);
}

onClick() {
  this.setState({
      collapse: !this.state.collapse,
    });
}
render() {
  const bgPink = {backgroundColor: '#ddc5f9',
   /* 'rgba(0, 0, 0, 0.3)', 
   background: 'rgba(0, 0, 0, 0.3)', 
   color: 'rgba(0, 0, 0, 0.3)', width: '100vw', 
  height: '13vh', top: '0' */}
  return (
      <MDBNavbar style={bgPink}  dark expand="md">
        <MDBNavbarBrand >
          <img src={logo} width="150" alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={ this.onClick } />
        <MDBCollapse isOpen = { this.state.collapse } navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
            <MDBNavLink  to="/Tutores">TUTORES</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
            <MDBNavLink  to="/Descargables">DESCARGABLES</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;