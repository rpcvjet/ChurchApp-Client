import { GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE, GET_ALLACTS_REQUEST} from '../actions/constants'

const inititalState = [];

export function churchListReducer (state = inititalState, action){

    switch(action.type){

        case GET_ALLACTS_REQUEST:
        return {
            ...state, 
            isLoading: true
        }


        case GET_ALLACTS_SUCCESS:
        return {
            churchlist: action.payload.data,
            isLoading: false
        }
        
        case GET_ALLACTS_FAILURE:
        return {
            ...state,
            isLoading: false,
            errorMessage: action.payload.message

        }

        default:
        return state;
    }
}
