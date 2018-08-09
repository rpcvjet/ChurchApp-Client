
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';
import '../../css/navbar.css';

class NavBarItem extends Component {

    render() {
        return(

    <Navbar  inverse collapseOnSelect>
        <Navbar.Header >
          <Navbar.Brand>
            <Link to='/'>ChurchApp</Link>
         </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
   
    <Nav  pullRight>

        <Navbar.Brand>
            <Link to='/userdash' className='bootstraplink'>MyActs</Link>
         </Navbar.Brand>

         <Navbar.Brand>
            <Link to='/addact' className='bootstraplink'>AddAct</Link>
         </Navbar.Brand>

         <Navbar.Brand>
            <Link to='#' className='bootstraplink'>Logout</Link>
         </Navbar.Brand>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


        )
    }

}

export default NavBarItem;


