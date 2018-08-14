import { POST_ACT_SUCCESS, POST_ACT_FAILURE} from '../actions/constants'

const initialState = {};

export function actReducer (state = initialState, action) {

    switch(action.type) {
        case POST_ACT_SUCCESS:
        return action.payload

        case POST_ACT_FAILURE:
        return action.payload
        
        default:
        return state

    }

}