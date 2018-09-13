import { GET_ALL_POINTS_REQUEST, GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE } from '../actions/constants';


const initialState = {
    points: []
}

export function appReducer  (state = initialState, action) {

    switch(action.type) {
        
        
        case GET_ALL_POINTS_REQUEST:
        return action.payload;

        case GET_ALL_POINTS_SUCCESS:
            return   {
                points: [action.payload.data]
            }
            

        case GET_ALL_POINTS_FAILURE:
             return action.payload;
            
        default:
            return state;
    }
}


