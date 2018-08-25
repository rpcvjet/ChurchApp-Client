import { GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE} from '../actions/constants'

const inititalState = {};

export function churchListReducer (state = inititalState, action){

    switch(action.type){

        case GET_ALLACTS_SUCCESS:
        return {
            churchlist: action.payload.data
        }
        
        case GET_ALLACTS_FAILURE:
        return action.payload

        default:
        return state;
    }
}
