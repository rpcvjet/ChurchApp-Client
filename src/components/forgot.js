import React, { Component } from 'react';
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
        if(!this.state.showAlert) {
            return <div></div>
          }       
        else {
          
          return(
          <div className='alertdiv'>
            <Alert color="success">
            This is a success alert — check it out!
            </Alert> 
          </div>
          )    
          
        }
      }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }
    render() {
        // console.log('state', this.state)
        const {email, errors } = this.state;

        return(
            <div className="register-wrapper">          
                <form size='large' className="registerForm" onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <label>Enter Email Address</label>
                            <FormControl
                            placeholder='user@myemail.com'
                            type='email'
                            name="email"
                            autoFocus
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            className={classnames('form-control form-control-lg  ', {'is-invalid': errors.email})}
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

        )
    }
}

// Register.propTypes = {
//     registerUser: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
    errors: state.errors,
});


export default connect(mapStateToProps, {resetPassword}) (Forgot);