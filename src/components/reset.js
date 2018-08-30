import React, { Component } from 'react';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import '../css/login.css'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { setNewPassword } from '../redux/actions/forgotActions'

class Reset extends Component {
  

         state = {
            password: '',
            confirm_password: '',
            submitted: false,
            errors: {}
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

    // componentDidMount() {
    //     if(this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.auth.isAuthenticated) {
    //         this.props.history.push('/')
    //     }
    //     if(nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }

    render() {
        console.log('this state', this.state)
        console.log('this.props in reset', this.props)
        // setting up input validation
        const { email, password, errors} = this.state;
        // const isEnabled = email.length > 0 && password.length > 0;

        return(
        
            <div className='loginwrapper'>
        
            
                <form size='large' className='loginform' onSubmit={this.handleSubmit}>
                    
                    <h1>Reset Password</h1>                  
                    
                    <FormGroup>
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
                    </FormGroup>

                      <FormGroup>
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
                    </FormGroup>

                    <div className='loginbutton'>
                    <Button bsStyle='primary' type='submit'>Reset</Button>
                    </div>
                </form>
            </div>
        )
    }
}

// Login.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// }

const mapStateToProps = state => {
        return { 
            // user: state, 
            // auth: state.auth,
            errors: state.errors,
            forgot: state.forgot
            }
}

export default connect (mapStateToProps, {setNewPassword}) (Reset);