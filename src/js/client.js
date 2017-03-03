import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import EmailSignup from '../components/EmailSignup'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'
import firebase from 'firebase'

const app = document.getElementById('app');

injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyCPNVQUXYjv46PwDpNCaOq1SVfypargR8I",
    authDomain: "fancyclub-3f106.firebaseapp.com",
    databaseURL: "https://fancyclub-3f106.firebaseio.com",
    storageBucket: "fancyclub-3f106.appspot.com",
    messagingSenderId: "141253218480"
}

firebase.initializeApp(config);

ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={Login}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="emailSignup" component={EmailSignup}></Route>
        </Route>
    </Router>,
    app);