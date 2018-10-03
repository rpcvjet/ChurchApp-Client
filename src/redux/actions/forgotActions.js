import { RESET_PASSWORD_SUCCESS, 
        RESET_PASSWORD_FAILURE, 
        SET_NEW_PASSWORD_SUCCESS, 
        SET_NEW_PASSWORD_FAILURE} from './constants'
import axios from  'axios';

const baseUrl = `${process.env.ENDPOINT}`;


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
        
    return {
        type: RESET_PASSWORD_FAILURE,
        payload: error.response.data
    }
}

export function setNewPassword(userData) {
    return (dispatch) => {
        return axios.post(`${baseUrl}/reset`, userData)
        .then( (res) => { dispatch(setNewPasswordSuccess(res))})
        .catch((err) => {dispatch(setNewPasswordFailure(err))})
    }
}

export function setNewPasswordSuccess(userData) {
    return {
        type: SET_NEW_PASSWORD_SUCCESS,
        payload: userData
    }
}

export function setNewPasswordFailure(err) {
    return {
        type: SET_NEW_PASSWORD_FAILURE,
        payload: err.response.data
    }
}



