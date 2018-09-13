
import { SET_CURRENT_USER, GET_ERRORS,  REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR } from './constants';
import setAuthToken from '../reduxUtils/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const baseUrl = 'http://localhost:4000/api';
// const baseUrl = 'https://api-churchapp.herokuapp.com/api';


export const registerUser = (user, history) => dispatch => {
    dispatch({type: REGISTER_REQUEST})
    return axios.post(`${baseUrl}/signup`,user)
    .then( 
        (res) => { 
        dispatch({type: REGISTER_SUCCESS})
        history.push('/login')
    })

    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })


}

export const loginUser = (userInfo) => dispatch => {
        dispatch({type: LOGIN_REQUEST}) 
        return axios.post(`${baseUrl}/login`, userInfo)
        .then( (res) => {dispatch(loginUserSuccess(res))})
        .catch(err => { dispatch(loginUserError(err))})
    
}

export const  loginUserSuccess = (res) => dispatch => {
    const token  = res.data.token;
    localStorage.setItem('jwtToken', token);
   
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    
    return {   
        type: LOGIN_SUCCESS,
        payload: res
    }
}

export function loginUserError(err) {
        console.log('err',err)
    return {
        type: GET_ERRORS,
        payload: err.response.data
    }
}




export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    localStorage.removeItem('user');
    dispatch(setCurrentUser({}));
    history.push('/login');
}
