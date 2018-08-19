import axios from 'axios';
import { GET_USERPOINTS_SUCCESS, 
         GET_USERPOINTS_FAILURE , 
         GET_USERACTS_SUCCESS, 
         GET_USERACTS_FAILURE,
         ADD_TYPE_FILTER,
         REMOVE_TYPE_FILTER

} from './constants';
const baseUrl = 'http://localhost:4000/api';


export function getUserPoints(id) {
    return (dispatch) => {
        return axios.get(`${baseUrl}/acts/total/`+ id)
        .then((res) => { dispatch(getPointsSuccess(res)) })
        .catch( (err) => { dispatch(getPointsFailure(err))  })
    }
}

export function getPointsSuccess(userpoints) {
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
////
export function getActList(id) {
    return (dispatch) => {
        return axios.get(`${baseUrl}/acts/`+ id)
        .then((res) => { dispatch(getActSuccess(res)) })
        .catch( (err) => { dispatch(getActFailure(err))  })
    }
}

export function getActSuccess(useracts) {
    return {
        type: GET_USERACTS_SUCCESS,
        payload: useracts
    }
}

export function getActFailure(err) {

    return {
        type: GET_USERACTS_FAILURE,
        payload: err
    }
}

export function addFilterType(filterType) {
    console.log('filterType!!!', filterType)
        return {
       type: ADD_TYPE_FILTER,
       filterType
    }
   
}

export function removeFilterType(filterType) {
    return {
        type: REMOVE_TYPE_FILTER,
        filterType
    }
}
