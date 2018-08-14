import axios from 'axios';
import { GET_USERPOINTS_SUCCESS, GET_USERPOINTS_FAILURE } from './constants';
const baseUrl = 'http://localhost:4000/api';


export function getUserPoints(id) {
    return (dispatch) => {
        return axios.get(`${baseUrl}/acts/total/`+ id)
        .then((res) => { dispatch(getPointsSuccess(res)) })
        .catch( (err) => { dispatch(getPointsFailure(err))  })
    }
}

export function getPointsSuccess(userpoints) {
        console.log('userpoints!!!!',userpoints)
    return {
        type: GET_USERPOINTS_SUCCESS,
        payload: userpoints
    }
}

export function getPointsFailure(err) {

    return {
        type: GET_USERPOINTS_FAILURE,
        payload: err
    }
}