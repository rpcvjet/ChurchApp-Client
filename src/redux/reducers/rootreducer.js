import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';
import { actReducer } from './actReducer';
import { userdashReducer } from './userdashReducer';
import { userListReducer } from './userlistReducer';
import { churchListReducer } from './churchlistReducer';
import { visibilityReducer } from './visibilityReducer'

const rootReducer = combineReducers({
    loginReducer,
    auth :authReducer,
    app: appReducer,
    act: actReducer,
    userdash: userdashReducer,
    userlist: userListReducer,
    churchlist: churchListReducer,
    visableFilter: visibilityReducer
})

export default rootReducer;