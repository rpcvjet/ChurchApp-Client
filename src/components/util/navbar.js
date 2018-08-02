
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar ,NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import '../../css/navbar.css';

class NavBar extends Component {

    render() {
        return(

    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to='/'>ChurchApp</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
   
    <Nav pullRight>
    <NavItem eventKey={1}>
    <Link to='/userdash' className='bootstraplink'>MyActs</Link> 
    </NavItem>
    <NavItem eventKey={2}>
    <Link to='#' className='bootstraplink'>LogOut</Link> 
    </NavItem>
   
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


        )
    }

}

export default NavBar;


