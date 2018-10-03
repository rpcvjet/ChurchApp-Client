import React, { Component } from 'react';
import {FormControl, FormGroup, Button, HelpBlock} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import {connect} from 'react-redux'
import '../css/register.css'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { setNewPassword } from '../redux/actions/forgotActions'

class Reset extends Component {

         state = {
            password: '',
            confirm_password: '',
            submitted: false,
            showAlert: false,
            errors: {},
            forgot: {}
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value})
    }

    handleChange = event => {
        this.setState({confirm_password: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
        

        const userData = {
            newPassword: this.state.password,
            resetToken: this.props.location.pathname.slice(7,47),
        }
        this.props.setNewPassword(userData);
        
    }

    showAlert = () => {
        if(this.state.showAlert) {
            return <div>
                  <Alert className="invalid-feedback alert-success">
                     {this.state.forgot && (<div className=" alert-success">{this.state.forgot.message}</div>)}
                  </Alert>
            </div>
          }       
       
      }

    getValidationState() {
        const length = this.state.password.length;
        if (length > 7) return 'success';
        else if (length > 0) return 'error';
        return null;
      }

      confirmGetValidationState() {
        if (this.state.confirm_password.length > 0 && this.state.password === this.state.confirm_password) return 'success';           
        else if(this.state.confirm_password.length > 0)  {return 'error'};
        return null;
      }


    componentWillReceiveProps(nextProps) {
       
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if(nextProps.forgot) {
            this.setState({forgot:nextProps.forgot})
            this.setState({showAlert: true})
            this.setState({errors: {}})
        }
    }

    render() {
      
        const { password, confirm_password, errors } = this.state;
        const isEnabled = password === confirm_password && password.length > 0 && confirm_password.length > 0;

        return(
        
            <div className='loginwrapper'>
            
                <form size='large' className='registerForm' onSubmit={this.handleSubmit}>
                    {this.showAlert()}
                    
                    <h1>Reset Password</h1>                  
                    
                    <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    >
                    <label>Password</label>
                    <FormControl placeholder='password'
                        type='password'
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })} 
                    />
                    {errors.password && (<div className="invalid-feedback alert-danger">{errors.password}</div>)}
                    <FormControl.Feedback />
                    <HelpBlock>Password must be at least 8 characters.</HelpBlock>
                    </FormGroup>

                      <FormGroup
                      controlId="formBasicText2"
                      validationState={this.confirmGetValidationState()}
                      >
                    <label>Confirm Password</label>
                    <FormControl placeholder='confirm password...'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.confirm_password}
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })} 
                    />
                    {errors.password && (<div className="invalid-feedback alert-danger">{errors.password}</div>)}
                    <FormControl.Feedback />

                    </FormGroup>

                    <div className='loginbutton'>
                    <Button disabled={!isEnabled} bsStyle='primary' type='submit'>Reset</Button>
                    </div>

                    <div className='rglink'>
                        <Link to ={'/login'} >
                            <p>Login Here.</p> 
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

Reset.propTypes = {
    setNewPassword: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
        return { 
            // user: state, 
            // auth: state.auth,
            errors: state.errors,
            forgot: state.forgot.data
            }
}

export default connect (mapStateToProps, {setNewPassword}) (Reset);