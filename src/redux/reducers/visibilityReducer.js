import {ADD_TYPE_FILTER, REMOVE_TYPE_FILTER} from '../actions/constants'

const initialstate = {

    typeFilter: []

};

export function visibilityReducer (state = initialstate, action){

    switch(action.type){
        
        case ADD_TYPE_FILTER:        
        return Object.assign( {}, state, {
            typeFilter: [...state.typeFilter, action.filterType]
        })
            
        case REMOVE_TYPE_FILTER:
        const newTypeFilter = state.typeFilter.filter((item) => 
            item !==action.filterType)
        
        return { 
            typeFilter: newTypeFilter 
        }

        default:
        return state;
    }
}