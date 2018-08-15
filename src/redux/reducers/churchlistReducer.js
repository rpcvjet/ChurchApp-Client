import { GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE} from '../actions/constants'

const inititalState = {};

export function churchListReducer (state = inititalState, action){

    switch(action.type){

        case GET_ALLACTS_SUCCESS:
        // console.log(action.payload.data.data)
        return {
            churchlist: action.payload.data.data
        }
        
        case GET_ALLACTS_FAILURE:
        return action.payload

        default:
        return state;
    }
}
