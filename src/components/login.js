import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import '../css/login.css'


class Login extends Component {

state = {
    email: '',
    password: ''
}

handleChange = event => {
    this.setState({email: event.target.value})
}

handlePasswordChange = event => {
    this.setState({password: event.target.value})
}



 render() {

    // setting up input validation
    const { email, password} = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

     return(
       
        <div className='loginwrapper'>
    
        
            <Form size='large' className='loginform'>
                
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
                <Form.Button disabled = {!isEnabled} color='green' type='submit'>Login</Form.Button>
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

export default Login;