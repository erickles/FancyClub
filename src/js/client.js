import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'bootstrap/dist/css/bootstrap.css'

const app = document.getElementById('app');
injectTapEventPlugin();
ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={Login}>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
    </Router>,
    app);