import { 
    
        RESET_PASSWORD_FAILURE, 
        SET_NEW_PASSWORD_FAILURE, 

} from '../actions/constants';
 

const initialState = {
    isFetching: false,
}

export function loginReducer  (state = initialState, action) {

    switch(action.type) {
        
            
            
        case RESET_PASSWORD_FAILURE:
                return action.payload

        case SET_NEW_PASSWORD_FAILURE:

        return action.payload
            
        default:
            return state;
    }
}


