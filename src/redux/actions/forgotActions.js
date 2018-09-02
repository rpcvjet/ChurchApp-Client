import { RESET_PASSWORD_SUCCESS, 
        RESET_PASSWORD_FAILURE, 
        SET_NEW_PASSWORD_SUCCESS, 
        SET_NEW_PASSWORD_FAILURE} from './constants'
import axios from  'axios';

const baseUrl = 'http://localhost:4000/api';

export function resetPassword(email) {
    return (dispatch) => {
        return axios.post(`${baseUrl}/forgot`, email)
        .then( (res) => { dispatch(resetPasswordSuccess(res))})
        .catch((err) => {dispatch(resetPasswordFailure(err))})
    }
}


export function resetPasswordSuccess(email) {

    return {
        type: RESET_PASSWORD_SUCCESS,
        payload: email
    }
}

export function resetPasswordFailure (error) {
            console.log('forgot action failure', error.response.data)
    return {
        type: RESET_PASSWORD_FAILURE,
        payload: error.response.data
    }
}


export function setNewPassword(userData) {
    console.log('user data', userData)
    return (dispatch) => {
        return axios.post(`${baseUrl}/reset`, userData)
        .then( (res) => { dispatch(setNewPasswordSuccess(res))})
        .catch((err) => {dispatch(setNewPasswordFailure(err))})
    }
}

export function setNewPasswordSuccess(userData) {
    console.log('userData!!!', userData)
    return {
        type: SET_NEW_PASSWORD_SUCCESS,
        payload: userData
    }
}

export function setNewPasswordFailure(err) {
    console.log('errr in action', err)
    return {
        type: SET_NEW_PASSWORD_FAILURE,
        payload: err.response.data
    }
}



