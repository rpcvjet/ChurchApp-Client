import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';
import { actReducer } from './actReducer'

const rootReducer = combineReducers({
    loginReducer,
    auth :authReducer,
    app: appReducer,
    act: actReducer
})

export default rootReducer;