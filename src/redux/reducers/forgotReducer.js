import { RESET_PASSWORD_SUCCESS, 
         RESET_PASSWORD_FAILURE, 
         SET_NEW_PASSWORD_FAILURE, 
         SET_NEW_PASSWORD_SUCCESS
        } from '../actions/constants';

const initialState = {};

export function forgotReducer (state = initialState, action) {

    switch(action.type) {
        
        case RESET_PASSWORD_SUCCESS:
        console.log('action.payload',action.payload)
        return action.payload

        case RESET_PASSWORD_FAILURE:
        return action.payload

        case SET_NEW_PASSWORD_SUCCESS:
        console.log('action.payload reset password',action.payload)

        return action.payload

        case SET_NEW_PASSWORD_FAILURE:
        console.log('action.payload reset password FAILURE',action.payload)

        return action.payload

        default: 
        return state
    }

}