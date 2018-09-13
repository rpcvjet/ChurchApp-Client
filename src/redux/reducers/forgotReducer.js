import { RESET_PASSWORD_SUCCESS, 
         SET_NEW_PASSWORD_SUCCESS
        } from '../actions/constants';

const initialState = {};

export function forgotReducer (state = initialState, action) {

    switch(action.type) {
        
        case RESET_PASSWORD_SUCCESS:
        return action.payload

        case SET_NEW_PASSWORD_SUCCESS:
        return action.payload

        default: 
        return state
    }

}