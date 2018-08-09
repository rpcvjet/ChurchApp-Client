import React, { Component, Fragment } from 'react'
import ActList from '../components/util/actlist'
import NavBar from '../components/util/navbar'
import {FormGroup, Checkbox} from 'react-bootstrap';
import '../css/userdash.css';

 class UserDash extends Component {

  render() {

    return (
                <Fragment>
                
                <NavBar />
                <div className='mobilesidebar'>
                     <FormGroup className='checkboxes' >
                        <Checkbox inline className='check' defaultChecked>Witness</Checkbox> 
                        <Checkbox inline className='check' defaultChecked>Encouragement</Checkbox>
                        <Checkbox inline className='check' defaultChecked>Kindness</Checkbox>
                    </FormGroup>
                    </div>


                
                <div className='wrapper'>
                    <div className='header'> 
                        
                        <h1 className='desktopMessage'>You've Commited 10 Acts!</h1>
                        <h1 className='mobileMessage'>Acts: 10</h1>
                      
                    </div>

                    <div className='sidebar'>
                     <FormGroup className='checkboxes' >
                        <Checkbox className='check' defaultChecked>Witness</Checkbox> 
                        <Checkbox className='check' defaultChecked>Encouragement</Checkbox>
                        <Checkbox className='check' defaultChecked>Kindness</Checkbox>
                    </FormGroup>
                    </div>

                    <div className='main'>
                        <ActList/>

                    </div>

                </div>
         </Fragment>
    )
  }
}

export default UserDash;