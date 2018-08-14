import axios from 'axios';
import { GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE } from './constants';
const baseUrl = 'http://localhost:4000/api';


export function getAllPoints() {
    return (dispatch) => {
        return axios.get(`${baseUrl}/admin/totalpoints`)
        //this was a very long bug, be sure to return the dispatch in an object
        .then ((res) => { dispatch(getAllPointsSuccess(res)) })
        .catch((err) => { dispatch(getAllPointsError(err)) })
        
    }
}
  
 export function getAllPointsSuccess(points) {
    console.log(points)
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




