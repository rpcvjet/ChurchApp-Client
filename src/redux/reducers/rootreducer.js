import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';
import { actReducer } from './actReducer';
import { userdashReducer } from './userdashReducer'

const rootReducer = combineReducers({
    loginReducer,
    auth :authReducer,
    app: appReducer,
    act: actReducer,
    userdash: userdashReducer
})

export default rootReducer;