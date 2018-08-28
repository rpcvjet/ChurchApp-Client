
import { LOGIN_ERROR, SET_CURRENT_USER, REGISTER_ERROR } from './constants';
import setAuthToken from '../reduxUtils/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const baseUrl = 'http://localhost:4000/api';

export const registerUser = (user, history) => dispatch => {
    return axios.post(`${baseUrl}/signup`,user)
    .then( 
        (res) => { 
        history.push('/login')
    })

    .catch(err => {
        dispatch({
            type: REGISTER_ERROR,
            payload: err.response.data
        })
    })


}

export function loginUser(userInfo) {
    return (dispatch) => {
        const url = 'http://localhost:4000/api/login';
        return axios.post(url, userInfo).then( 
            (res) => {
            const token  = res.data.token;
            // const user = res.data.user;

            localStorage.setItem('jwtToken', token);
            // localStorage.setItem('user', JSON.stringify(user));
           
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
           
        })
        .catch(err => {
            // console.log('errrr', err)
            dispatch({              
                type: LOGIN_ERROR,
                payload: err
            })
        })
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
