import React, { Component } from 'react';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import { registerUser } from '.././redux/actions/loginActions'
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import  spinner from '../css/images/Spin-1.8s-200px.gif'
import '../css/register.css'


class Register extends Component {

    state = {
        fullname: '',
        email: '',
        password: '',
        password_confirm:'',
        errors: {}
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

        this.setState({password_confirm: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password
            
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
                
        const {fullname, email, password, password_confirm, errors } = this.state;
        const isEnabled = fullname.length > 3 && email.length > 0 && password === 
        password_confirm;

        if(this.props.isFetching) {
            return <div className='spinner'>
                    <img src={spinner} className='gif' alt='registering gif'/>
                    <p>Getting you Registered...</p>
                    </div>
        }

        return(
       <div className="register-wrapper">
     
                <form size='large' className="registerForm" onSubmit={this.handleSubmit }>
                    <FormGroup>
                    <label>Enter Full Name</label>

                        <FormControl
                        placeholder='John Doe'
                        type='fullname'
                        onChange={this.handleFullnameChange}
                        value={this.state.fullname}
                        className={classnames('form-control form-control-lg', {'is-invalid': errors.fullname})}
                      
                        />
                        {errors.name && (<div className="invalid-feedback alert-danger">{errors.fullname}</div>)}
                    </FormGroup>

                      <FormGroup>
                    <label>Enter Email Address</label>

                        <FormControl
                        placeholder='user@myemail.com'
                        type='email'
                        name="email"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        className={classnames('form-control form-control-lg  ', {'is-invalid': errors.email})}
                        />
                        {errors.email && (<div className="invalid-feedback alert-danger">{errors.email}</div>)}
                    </FormGroup>

                    <FormGroup>
                    <label>Password</label>
                    <FormControl placeholder='password'
                        name='password_confirm'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        type='password'
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}
                
                        />
                        {errors.password && (<div className="invalid-feedback alert-danger">{errors.password}</div>)}
                    </FormGroup>

                     <FormGroup>
                    <label>Confirm Password</label>
                    <FormControl placeholder='password'
                        type='password'
                        name='password_confirm'
                        onChange={this.handleConfirmChange}
                        value={this.state.password_confirm}
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password_confirm
                        })}
                        />
                        {errors.password_confirm && (<div className="invalid-feedback alert-danger">{errors.password_confirm}</div>)}
                    </FormGroup>

                     <div className='regbutton'>
                    <Button disabled={!isEnabled} bsStyle='success' type='submit'>Register</Button>
                    </div>  

                     <div className='rglink'>
                        <Link to ={'/login'} >
                            <p>Registered?
                                 Login Here.</p> 
                        </Link>
                    </div>
                </form>   
        </div>

        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors,
    isFetching: state.errors.isFetching
});


export default connect(mapStateToProps, {registerUser})(withRouter (Register));