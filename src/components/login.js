import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import '../css/login.css'

const divstyle = {
    width: 250,
    
}


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
         <Header className='header' as='h2'>
             ChurchApp
        </Header>
           

            <Form.Field style={divstyle}>
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
              
            <Form.Field style= {divstyle}>
            <label>Password</label>
            <Form.Input placeholder='password'
                iconPosition='left' 
                type='password'
                fluid icon='lock'
                onChange={this.handlePasswordChange}
                value={this.state.password}
            />
            </Form.Field>
            <div className='button'>
            <Form.Button disabled = {!isEnabled} color='green' type='submit'>Login</Form.Button>
            </div>

            <div className='link'>
            <Link to ='/register' >
                Not signed up? Click here to Register.
            </Link>
            </div>
        </Form>
        </div>
     )
 }


}

export default Login;