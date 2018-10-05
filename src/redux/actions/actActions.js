import axios from 'axios';
import { POST_ACT_SUCCESS, POST_ACT_FAILURE } from './constants';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL
 
export function sendActToDB(actdata) {
    return (dispatch) => {
    const url = `${REACT_APP_API_URL}/acts/create`;
        return axios.post(url, actdata)        
        .then( (res) => {dispatch(sendActToDBSuccess(res))})
        .catch( err => {dispatch(sendActToDBFailure(err))})
    }
    
}

export function sendActToDBSuccess(actdata) {
    return{
        type:POST_ACT_SUCCESS,
        payload: actdata
    }
}

export function sendActToDBFailure(error) {
    return {
        type: POST_ACT_FAILURE,
        payload: error
    }
}