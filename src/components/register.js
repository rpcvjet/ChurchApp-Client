import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../css/register.css'

class Register extends Component {

    state = {
        fullname: '',
        email: '',
        password: '',
        confirmpassword:''
    }


    handleFullnameChange = (event) => {

        this.setState({fullname: event.target.value})
    }

    handleEmailChange = (event) => {

        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {

        this.setState({password: event.target.value})
    }

    handleConfirmChange = (event) => {

        this.setState({confirmpassword: event.target.value})
    }

    render() {

        const {fullname, email, password, confirmpassword} = this.state;
        const isEnabled = fullname.length > 3 && email.length > 0 && password.length > 3 
        && confirmpassword.length > 3;

        return(
       <div className="register-wrapper">
     
                <Form size='large' className="registerForm">
                    <Form.Field>
                    <label>Enter Full Name</label>

                        <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='John Doe'
                        type='fullname'
                        onChange={this.handleFullnameChange}
                        value={this.state.fullname}
                        />
                    </Form.Field>

                      <Form.Field>
                    <label>Enter Email Address</label>

                        <Form.Input
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='user@myemail.com'
                        type='email'
                        name="accessemail"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        />
                    </Form.Field>

                    <Form.Field>
                    <label>Password</label>
                    <Form.Input placeholder='password'
                        iconPosition='left' 
                        fluid icon='lock'
                        name='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        type='password'
                
                        />
                    </Form.Field>

                     <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input placeholder='password'
                        iconPosition='left' 
                        fluid icon='lock'
                        type='password'
                        name='confirmpassword'
                        onChange={this.handleConfirmChange}
                        value={this.state.confirmpassword}
                        />
                    </Form.Field>

                     <div className='regbutton'>
                    <Button disabled={!isEnabled} color='green' type='submit'>Register</Button>
                    </div>  

                     <div className='rglink'>
                        <Link to ={'/login'} >
                            <p>Registered?
                                 Login Here.</p> 
                        </Link>
                    </div>
                </Form>   
        </div>

        )
    }
}


export default Register;