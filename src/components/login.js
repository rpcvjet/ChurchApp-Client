import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {loginUser} from '../redux/actions/loginActions';
import {connect} from 'react-redux'
import '../css/login.css'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            accesspassword: '',
            submitted: false,
            errors: {}
    }
}

handleChange = event => {
    this.setState({email: event.target.value})
}

handlePasswordChange = event => {
    this.setState({accesspassword: event.target.value})
}

handleSubmit = event => {
    this.setState({submitted: true})
    
    const user = {
        email: this.state.email,
        accesspassword: this.state.accesspassword
    }
    this.props.loginUser(user);
    
}

componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/');
    }
}

componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
        this.props.history.push('/')
    }
    // if(nextProps.errors) {
    //     this.setState({
    //         errors: nextProps.errors
    //     });
    // }
}

 render() {
    // setting up input validation
    const { email, accesspassword} = this.state;
    const isEnabled = email.length > 0 && accesspassword.length > 0;

     return(
       
        <div className='loginwrapper'>
    
        
            <Form size='large' className='loginform' onSubmit={this.handleSubmit}>
                
                <h1>ChurchApp</h1>

                <Form.Field>
                <label>Email</label>
                <Form.Input 
                    fluid icon='user'
                    iconPosition='left' 
                    placeholder='email' 
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}  
                />
                </Form.Field>
                
                <Form.Field>
                <label>Password</label>
                <Form.Input placeholder='password'
                    iconPosition='left' 
                    type='password'
                    fluid icon='lock'
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                />
                </Form.Field>

                <div className='loginbutton'>
                <Form.Button disabled = {!isEnabled} color='green' type='submit' >Login</Form.Button>
                </div>

                <div className='link'>
                <Link to ='/register'> 
                <p>Not signed up? Click here to Register.</p>

                </Link>
                </div>
            </Form>
        </div>
     )
 }


}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
}

function mapStateToProps (state) {
        return { 
                 user: state, 
                 auth: state.auth
            }
}

export default connect (mapStateToProps, {loginUser}) (Login);