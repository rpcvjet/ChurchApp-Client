import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Button  } from 'semantic-ui-react';
import SideBar from './util/sidebar';
import Actlist from './util/actlist';
import '../css/userdash.css';




class Userdash extends Component {

    render() {
        return(
             <div className='wrapper'>
                <div className='header'>
                <div className='message'>
                You have performed 10 acts!
                </div>

                <div className='addactbutton'>
                <Link to='/addact' >
                <Button color='yellow' >Add Act</Button>
                </Link>
                </div>
                </div>
                <div className='sidebar'>
                <SideBar />
                </div>
                
                <div className='main'>
                <Actlist/>
                
                </div>
                
            </div>
        )
    }



}


export default Userdash;