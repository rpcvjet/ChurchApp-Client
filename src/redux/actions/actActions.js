import axios from 'axios';
import { POST_ACT_SUCCESS, POST_ACT_FAILURE } from './constants';

let API_URL

process.env.REACT_APP_STAGE === 'dev'
  ? API_URL = 'http://localhost:4000/api'
  : API_URL = 'https://api-churchapp.herokuapp.com'



export function sendActToDB(actdata) {
    return (dispatch) => {
    const url = `${API_URL}/acts/create`;
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