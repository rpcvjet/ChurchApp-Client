import { GET_ERRORS } from '../actions/constants';


const initialState = {};

export function errorReducer (state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default: 
            return state;
    }
}
