import axios from 'axios';
import { GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE, GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE, GET_ALLACTS_REQUEST } from './constants';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL





export function getAllPoints() {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/admin/totalpoints`)
        .then ((res) => { dispatch(getAllPointsSuccess(res)) })
        .catch((err) => { dispatch(getAllPointsError(err)) })
        
    }
}
  
 export function getAllPointsSuccess(points) {
    return {
        type: GET_ALL_POINTS_SUCCESS,
        payload: points
    }
}

  export function getAllPointsError (error) {
    return {
        type: GET_ALL_POINTS_FAILURE,
        payload: error
    }
}

export function getAllActs(){
    return (dispatch) => {
        dispatch({type: GET_ALLACTS_REQUEST})
        return axios.get(`${REACT_APP_API_URL}/acts`)
        .then ((res) => { dispatch(getAllActsSuccess(res)) })
        .catch((err) => { dispatch(getAllActsError(err)) })
        
    }
}

export function getAllActsSuccess(allacts) {
    return {
        type: GET_ALLACTS_SUCCESS,
        payload: allacts
    }
}

  export function getAllActsError (error) {
    return {
        type: GET_ALLACTS_FAILURE,
        payload: error
    }
}





