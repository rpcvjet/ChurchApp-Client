import React, { Component, Fragment } from 'react'
import ActList from '../components/util/actlist'
import NavBar from '../components/util/navbar'
import {FormGroup, Checkbox} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { getUserPoints } from '../redux/actions/userdashActions';

import { connect } from 'react-redux';

import '../css/userdash.css';

 class UserDash extends Component {

    componentWillMount(){
        this.props.getUserPoints(this.props.auth.user.user.userid);
    }

   
  render() {
    console.log('this.props in userdash', this.props)
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
                        
                        <h1 className='desktopMessage'>{this.props.auth.user.user.fullname}, you've commited {this.props.userpoints.userpoints} Acts!</h1>
                        <h1 className='mobileMessage'>Acts: {this.props.userpoints.userpoints}</h1>
                      
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


function mapDispatchToProps (dispatch) {
    return bindActionCreators({getUserPoints}, dispatch)
} 


const mapStatetoProps = state => {
    return {
        auth: state.auth,
        userpoints: state.userdash
    }
}

export default connect (mapStatetoProps, mapDispatchToProps)(UserDash);