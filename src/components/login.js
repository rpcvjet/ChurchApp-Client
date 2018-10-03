import React, { Component } from 'react';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {loginUser} from '../redux/actions/loginActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import spinner from '../css/images/Spin-1.8s-200px.gif'
import '../css/login.css'

class Login extends Component {
  
         state = {
            email: '',
            password: '',
            submitted: false,
            errors: {
                errors:{}
            }
    }

    handleChange = event => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
        
        const user = {
            email: this.state.email,
            password: this.state.password
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
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {

        // setting up input validation
        const { errors } = this.state;

        if(this.props.loggingIn === 'true') {
            return <div className='spinner'>
                    <img src={spinner} className='gif' alt='loading gif'/>
                    <p>Logging In...</p>
                    </div>
        }

        return(
        
            <div className='loginwrapper'>      
                <form size='large' className='loginform' onSubmit={this.handleSubmit}>
                    
                    <h1>ChurchApp</h1>

                    <FormGroup>
                    <label>Email</label>
                    <FormControl 
                        placeholder='email' 
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email}  
                        className={classnames('form-control form-control-lg', {'is-invalid': errors.email })}
                    />
                    {errors.email && (<div className="invalid-feedback alert-danger">{errors.email}</div>)}
                    </FormGroup>
                    
                    <FormGroup>
                    <label>Password</label>
                    <FormControl placeholder='password'
                        type='password'
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        className={classnames('form-control form-control-lg', {'is-invalid': errors.password})} 
                    />
                    {errors.password && (<div className="invalid-feedback alert-danger">{errors.password}</div>)}
                    </FormGroup>

                    <div className='loginbutton'>
                    <Button  bsStyle='success' type='submit' >Login</Button>
                    </div>

                    <div className='link'>
                    <Link to ='/register'> 
                    <p>Not signed up? Click here to Register.</p>

                    </Link>

                    <Link to ='/forgot'> 
                    <p>Forgot password. Click here to reset</p>

                    </Link>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
        return { 
            user: state, 
            auth: state.auth,
            errors: state.errors.errors,
            loggingIn: state.errors.loggingIn
            }
}

export default connect (mapStateToProps, {loginUser}) (Login);