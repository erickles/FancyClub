import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import Avatar from 'react-avatar'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import firebase from 'firebase'

@observer
class EmailSignup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            message: "",
            title: ""
        };

    }

    handleEmailInput(e) {
        store.handleEmailInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.handlePasswordInput(e.target.value)
    }

    handleRepeatPasswordInput(e) {
        store.handleRepeatPasswordInput(e.target.value)
    }

    componentDidMount() {
        store.setShowLogo(false)
    }

    handleDialogMessage(errorCode, erroMessage) {

        switch (errorCode) {

            case 'auth/user-not-found':
                this.setState({ title: 'E-mail não cadastrado', message: 'Você ainda não tem cadastro com este e-mail, faça seu cadastro!' });
                break;

            case 'auth/invalid-email':
                this.setState({ title: 'E-mail inválido', message: 'Informe um e-mail válido!' });
                break;

            case 'auth/weak-password':
                this.setState({ title: 'Senha inválida', message: 'Informe uma senha com pelo menos 6 caracteres' });
                break;

            case 'auth/email-already-in-use':
                this.setState({ title: 'E-mail inválido', message: 'Este e-mail já esta sendo utilizaso por outra conta!' });
                break;

            default:
                this.setState({ title: errorCode, message: erroMessage });
                break;

        }

    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    createUser() {

        const { emailInput, passwordInput, repeatPasswordInput, nameInput, sureNameInput } = store

        const openDialog = (errorCode, errorMessage) => {
            this.handleDialogMessage(errorCode, errorMessage)
            this.handleOpen();
        }

        firebase.auth()
            .createUserWithEmailAndPassword(emailInput, passwordInput)
            .then(() => {
                
                const user = firebase.auth().currentUser;                

                // A user entry.
                var userData = {
                    userName: nameInput,
                    userSurename: sureNameInput,
                    userEmail: emailInput,
                    userPassword: passwordInput
                };

                // Get a key for a new User.
                var newUserKey = firebase.database().ref().child('users').push().key;                

                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/users/' + newUserKey] = userData;                           

                // Do both in parallel while being able to capture errors in promise
                return Promise.all([
                    user.sendEmailVerification(),
                    openDialog('Verifique seu e-mail!', 'Foi enviado um e-mail para ' + emailInput + ' para que sua conta seja confirmada.'), 
                    user.updateProfile({ nameInput })
                ])
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;

                openDialog(errorCode, errorMessage)
                
            });

    }

    handleNameInput(e) {
        store.handleNameInput(e.target.value)
    }

    handleSurenameInput(e) {
        store.handleSureNameInput(e.target.value)
    }

    handleEmailInput(e) {
        store.handleEmailInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.handlePasswordInput(e.target.value)
    }

    render() {

        const { nameInput, sureNameInput, emailInput, passwordInput, repeatPasswordInput } = store

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (

            <div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField onChange={this.handleNameInput.bind(this)} value={nameInput} id="userName" hintText="Informe seu nome" floatingLabelText="Nome" type="text" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField onChange={this.handleSurenameInput.bind(this)} value={sureNameInput} id="userSureName" hintText="Informe seu sobrenome" floatingLabelText="Sobrenome" type="text" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField onChange={this.handleEmailInput.bind(this)} value={emailInput} id="userEmail" hintText="Informe seu e-mail" floatingLabelText="E-mail" type="email" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField onChange={this.handlePasswordInput.bind(this)} value={passwordInput} id="userPassword" hintText="Informe sua senha" floatingLabelText="Senha" type="password" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField value={repeatPasswordInput} id="userRepeatPassword" hintText="Repita sua senha" floatingLabelText="Repita sua senha" type="password" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <RaisedButton
                            onClick={this.createUser.bind(this)}
                            target="_blank"
                            fullWidth={true}
                            label="Cadastrar"
                            icon={<FontIcon className="muidocs-icon-custom-github" />} />
                    </div>
                </div>

                <Dialog
                    title={this.state.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    {this.state.message}
                </Dialog>

            </div>
        );
    }

}

export default EmailSignup;