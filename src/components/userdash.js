import React, { Component,Fragment } from 'react';
import {  Button  } from 'semantic-ui-react';
import SideBar from './util/sidebar';
import '../css/userdash.css';




class Userdash extends Component {

    render() {
        return(
             <div className='wrapper'>
                <div className='header'>
                header
                </div>
                <div className='sidebar'>
                <SideBar />
                </div>
                
                <div className='main'>

                
                </div>
                
            </div>
        )
    }



}


export default Userdash;