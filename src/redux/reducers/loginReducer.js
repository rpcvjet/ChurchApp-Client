import { LOGIN_ERROR, REGISTER_ERROR,RESET_PASSWORD_FAILURE} from '../actions/constants';
 

const initialState = {}

export function loginReducer  (state = initialState, action) {

    switch(action.type) {
        case LOGIN_ERROR:
            return action.payload.response.data;

        case REGISTER_ERROR:
            return action.payload;
            
        case RESET_PASSWORD_FAILURE:
        return action.payload

            
        default:
            return state;
    }
}


