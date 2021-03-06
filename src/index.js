import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import AddAct from './components/AddAct';
import Login from './components/login';
import Register from './components/register'
import Filter from './components/util/filterList';
import Forgot from './components/forgot';
import Reset from './components/reset';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootreducer';
import setAuthToken from './redux/reduxUtils/setAuthToken';
import { setCurrentUser } from './redux/actions/loginActions';
import jwt_decode from 'jwt-decode';

const middleware = applyMiddleware(thunk);
const initialState = {}

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}


const store = createStore(
    rootReducer, 
    initialState,
    compose(
        middleware,
        devTools
        ));

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/addact' component={AddAct}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/userdash' component={Filter}/>
            <Route path='/forgot' component={Forgot}/>
            <Route path='/reset' component={Reset}/>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

