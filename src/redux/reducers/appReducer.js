import { GET_ALL_POINTS_REQUEST, GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE } from '../actions/constants';


const initialState = {}

export function appReducer  (state = initialState, action) {

    switch(action.type) {
        
        case GET_ALL_POINTS_REQUEST:
        console.log('action.payload success',action.payload)

        return action.payload;

        case GET_ALL_POINTS_SUCCESS:
            return   {
                // ...state,
                points: action.payload.data.data[0].count
            }
            

        case GET_ALL_POINTS_FAILURE:
             return action.payload;
            
        default:
            return state;
    }
}

