import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../../css/pedmobilemulti.css';
import Dialog from '../components/Dialog.js';

// Redux tutorial
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import axios from 'axios';
import promise from 'redux-promise-middleware';
//import userSystemDefault from '../../json/type2/UserSystem.json';
import salesRepSystemDefault from '../json/type2/SalesRepSystem.json';

class Profile extends Component {

    constructor() {
        super()
        this.state = {}
    }

    show() {
        this.setState({ show: true })
    }

    onClose() {
        console.log('Fechei...');
        this.setState({ show: false })
    }

    onSave() {
        console.log('Salvei...');
        this.setState({ show: false })
    }

    componentDidMount() {

        const initialState = {
            fetching: false,
            fetched: false,
            users: [],
            error: null,
        }

        const userSystemReducer = (state = initialState, action) => {
            // userSystemDefault.UserSystem[0]
            switch (action.type) {

                case "CHANGE_PASSWORD": {
                    state = { ...state, userPassword: action.payload }
                    break;
                }

                case "FETCH_USERS_PENDING": {
                    return { ...state, fetching: true }
                    break;
                }

                case "FETCH_USERS_REJECTED": {
                    return { ...state, fetching: false, error: action.payload }
                    break;
                }

                case "FETCH_USERS_FULLFILLED": {
                    return {
                        ...state,
                        fetching: false,
                        fetched: true,
                        users: action.payload,
                    }
                    break;
                }

                default:
                    break;

            }

            return state;
        };

        const salesRepSystemReducer = (state = salesRepSystemDefault.SalesRepSystem[0], action) => {
            return state;
        };

        const reducers = combineReducers({
            userSystem: userSystemReducer,
            salesRepSystem: salesRepSystemReducer,
        })        

        // Middlewares
        const middleware = applyMiddleware(promise(), thunk, logger());

        const store = createStore(reducers, middleware);

        store.subscribe(() => {
            console.log("store mudou", store.getState());
        })

        store.dispatch({
            type: "FETCH_USERS",
            payload: axios.get("http://rest.learncode.academy/api/wstern/users")
        })        
    }

    render() {

        return (

            <div className="container-fluid content">

                <Dialog type="info" show={this.state.show}
                    onClose={this.onClose.bind(this)}
                    onYes={this.onSave.bind(this)}
                    title="Alterações salvas!"
                    message="Alterações salvas com sucesso!" />

                <form className="form-horizontal">

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userCode">Código:</label>
                        <div className="col-sm-2">
                            <input disabled type="text" className="form-control" id="userCode" placeholder="Código" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userName">Razão Social:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="userName" placeholder="Razão Social" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userMobile">Celular:</label>
                        <div className="col-sm-3">
                            <input type="phone" className="form-control" id="userMobile" placeholder="Informe seu celular" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userPhone">Fixo:</label>
                        <div className="col-sm-3">
                            <input type="phone" className="form-control" id="userPhone" placeholder="Informe seu telefone fixo" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userEmail">Email:</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" id="userEmail" placeholder="Informe o e-mail" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="userPassword">Senha:</label>
                        <div className="col-sm-4">
                            <input type="password" className="form-control" id="userPassword" placeholder="Informe a senha" />
                            <input type="password" className="form-control" id="userPasswordRepeat" placeholder="Repita a senha" />
                        </div>
                    </div>


                </form>

                <div className="col-md-offset-2 col-md-10">
                    <button className="btn btn-default" onClick={this.show.bind(this)}>Salvar</button>
                </div>

            </div>
        );
    }
}

export default Profile;