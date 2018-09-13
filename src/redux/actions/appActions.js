import axios from 'axios';
import { GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE, GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE, GET_ALLACTS_REQUEST } from './constants';
const baseUrl = 'http://localhost:4000/api';
// const baseUrl = 'https://api-churchapp.herokuapp.com/api';



export function getAllPoints() {
    return (dispatch) => {
        return axios.get(`${baseUrl}/admin/totalpoints`)
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
        return axios.get(`${baseUrl}/acts`)
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





