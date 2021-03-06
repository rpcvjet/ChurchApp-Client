
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/loginActions'
import { connect } from 'react-redux';

import '../../css/navbar.css';

 export class NavBarItem extends Component {

    onLogout = event => {
        this.props.logoutUser(this.props.history)
    }

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
            <Link to='#' className='bootstraplink'onClick={this.onLogout}>Logout</Link>
         </Navbar.Brand>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user
    }
}


export default connect(mapStateToProps, {logoutUser}) (withRouter(NavBarItem)); 


