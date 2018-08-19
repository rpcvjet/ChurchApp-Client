import {GET_USERACTS_SUCCESS, GET_USERACTS_FAILURE} from '../actions/constants'

const initialstate = {


};

export function userListReducer (state = initialstate, action){


    switch(action.type){

        case GET_USERACTS_SUCCESS:
        // console.log(action.payload.data)
        return {
            userlist: action.payload.data.data
        }
        
        case GET_USERACTS_FAILURE:
        return action.payload


        default:
        return state;
    }
}