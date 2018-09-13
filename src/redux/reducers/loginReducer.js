import { 
         LOGIN_REQUEST,
         LOGIN_SUCCESS, 
        
        REGISTER_REQUEST, 
        REGISTER_SUCCESS, 
        RESET_PASSWORD_FAILURE, 
        SET_NEW_PASSWORD_FAILURE, 

} from '../actions/constants';
 

const initialState = {
    isFetching: false,
    loggingIn: false
}

export function loginReducer  (state = initialState, action) {

    switch(action.type) {
        

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
            
        case RESET_PASSWORD_FAILURE:
                return action.payload

        case SET_NEW_PASSWORD_FAILURE:

        return action.payload
            
        default:
            return state;
    }
}


