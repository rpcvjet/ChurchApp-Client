import {GET_USERPOINTS_SUCCESS, GET_USERPOINTS_FAILURE} from '../actions/constants'

const initialstate = {};

export function userdashReducer (state = initialstate, action){

    switch(action.type){

        case GET_USERPOINTS_SUCCESS:
        return {
            userpoints: action.payload.data.data[0].count
        }
        
        case GET_USERPOINTS_FAILURE:
        return action.payload

        default:
        return state;
    }
}