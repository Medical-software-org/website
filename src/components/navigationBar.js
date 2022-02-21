import React from 'react';
import './navigationBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.svg';
import { NavLink } from "react-router-dom";

function navigationBar() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" className='shadow p-3 mb-5 bg-white rounded' >
        <NavLink className='navbar-brand' to="/">
          <img
            src={logo}
            width="55"
            height="55"
            className="d-inline-block align-top"
            alt="Archive Logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/privacy">Privacy Policy</NavLink>
            {/* <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/terms-of-use">Terms Of Use</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default navigationBar
