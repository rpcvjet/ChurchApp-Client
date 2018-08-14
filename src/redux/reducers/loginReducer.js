import { LOGIN_ERROR, REGISTER_ERROR } from '../actions/constants';
 

const initialState = {}

export function loginReducer  (state = initialState, action) {

    switch(action.type) {
        case LOGIN_ERROR:
            return action.payload;

        case REGISTER_ERROR:
            return action.payload;
            
        default:
            return state;
    }
}


