import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app";
import AddAct from './components/AddAct';
import Login from './components/login';
import Register from './components/register'
import Userdash from './components/userdash';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/addact' component={AddAct}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/userdash' component={Userdash}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));

