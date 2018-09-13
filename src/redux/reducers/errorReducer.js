import { GET_ERRORS, 
        LOGIN_REQUEST,
        LOGIN_SUCCESS, 
        LOGIN_ERROR,
        REGISTER_REQUEST, 
        REGISTER_SUCCESS, 
        } from '../actions/constants';


const initialState = {

    isFetching: false,
    loggingIn: false
};

export function errorReducer (state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                errors: action.payload,
                loggingIn: false
            };


        case REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        
        case LOGIN_REQUEST:
                return {
                    ...state,
                    loggingIn: true
                }
            
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }

        default: 
            return state;
    }
}
