import React, { Component,Fragment } from 'react';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import { Alert } from 'react-bootstrap';
import { resetPassword } from '.././redux/actions/forgotActions'
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../css/register.css'

class Forgot extends Component {

    state = {   
        email: '',
        errors: {},
        forgot: {},
        showAlert: false,
    }


    handleEmailChange = (event) => {

        this.setState({email: event.target.value})
    }


    handleSubmit = e => {
        e.preventDefault();       
        const sendtoemail = {
            email: this.state.email,          
        }
        this.props.resetPassword(sendtoemail);
    }

    showAlert = () => {
        if(this.state.showAlert) {
            return <div>
                  <Alert className="invalid-feedback alert-success">
                     {this.state.forgot && (<div className=" alert-success">{this.state.forgot.email}</div>)}
                  </Alert>
            </div>
          }       
       
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
        console.log('props', this.props)
        const { email, errors, forgot } = this.state;
        console.log(this.state)

        return(
            <Fragment>
            <div className="register-wrapper"> 
                
                <form size='large' className="registerForm" onSubmit={this.handleSubmit}>
                    {this.showAlert()}

                    <FormGroup>
                        <label>Enter Email Address</label>
                            <FormControl
                            placeholder='user@myemail.com'
                            type='email'
                            name="email"
                            autoFocus
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            className={classnames('form-control form-control-lg  ', {'is-invalid': errors.email, 'valid': forgot.email})}
                        />
                        {errors.email && (<div className="invalid-feedback alert-danger">{errors.email}</div>)}
                        
                    </FormGroup>

                    <div className='regbutton'>
                        <Button bsStyle='primary' type='submit'>Send</Button>
                    </div>  

                    <div className='rglink'>
                        <Link to ={'/login'} >
                            <p>Registered? Login Here.</p> 
                        </Link>
                    </div>
                </form>   
            </div>
            </Fragment>
        )
    }
}

Forgot.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => (
    {
    
    errors: state.errors,
    forgot: state.forgot.data
});


export default connect(mapStateToProps, {resetPassword}) (Forgot);