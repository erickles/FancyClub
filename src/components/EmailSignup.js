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
            title: "",
            hasSignupErrors: false
        };

    }

    handleNameInput(e) {
        store.setNameError('')
        store.handleNameInput(e.target.value)
    }

    handleSurenameInput(e) {
        store.setSurenameError('')
        store.handleSurenameInput(e.target.value)
    }

    handleEmailInput(e) {
        store.setEmailError('')
        store.handleEmailInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.setPasswordError('')
        store.handlePasswordInput(e.target.value)
    }

    handleRepeatPasswordInput(e) {
        store.setRepeatPasswordError('')
        store.handleRepeatPasswordInput(e.target.value)
    }

    componentDidMount() {
        store.setShowLogo(false)
    }

    handleDialogMessage(errorCode, erroMessage) {
        
        switch (errorCode) {

            case 'auth/user-not-found':
                this.setState({ title: 'E-mail não cadastrado', message: 'Você ainda não tem cadastro com este e-mail, faça seu cadastro!', hasSignupErrors: true })
                store.setEmailError(this.state.title)
                break;

            case 'auth/invalid-email':
                this.setState({ title: 'E-mail inválido', message: 'Informe um e-mail válido!', hasSignupErrors: true })
                store.setEmailError(this.state.title)
                break;

            case 'auth/weak-password':
                this.setState({ title: 'Senha inválida', message: 'Informe uma senha com pelo menos 6 caracteres', hasSignupErrors: true })
                store.setPasswordError(this.state.title)
                break;

            case 'auth/email-already-in-use':
                this.setState({ title: 'E-mail inválido', message: 'Este e-mail já esta sendo utilizaso por outra conta!', hasSignupErrors: true });
                store.setEmailError(this.state.title)
                break;

            default:
                this.setState({ title: errorCode, message: erroMessage, hasSignupErrors: true });
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

        const setDialogMessage = (errorCode, errorMessage) => {
            this.handleDialogMessage(errorCode, errorMessage)            
        }
        const openDialog = () => {            
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
                    setDialogMessage('Verifique seu e-mail!', 'Foi enviado um e-mail para ' + emailInput + ' para que sua conta seja confirmada.'),
                    openDialog(),
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
        store.setNameError("")
        store.handleNameInput(e.target.value)
    }

    handleSurenameInput(e) {
        store.setSurenameError('')
        store.handleSureNameInput(e.target.value)
    }

    handleEmailInput(e) {
        store.setEmailError('')
        store.handleEmailInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.setPasswordError('')
        store.handlePasswordInput(e.target.value)
    }

    fetchSignup() {

        const openDialog = (errorCode, errorMessage) => {
            this.handleDialogMessage(errorCode, errorMessage)
            this.handleOpen();
        }

        const { nameInput, sureNameInput, emailInput, passwordInput, repeatPasswordInput } = store

        this.setState({ hasSignupErrors: false })

        if (nameInput.length === 0) {
            //openDialog('Nome não informado','Informe seu nome!')
            store.setNameError('Nome não informado')
            this.setState({ hasSignupErrors: true })            
        }

        if (sureNameInput.length === 0) {
            //openDialog('Sobrenome não informado','Informe seu sobrenome!')
            store.setSurenameError('Sobrenome não informado')
            this.setState({ hasSignupErrors: true })            
        }

        if (!this.state.hasSignupErrors) {
            this.createUser()
        }

    }

    render() {

        const { nameInput, sureNameInput, emailInput, passwordInput, repeatPasswordInput, nameError, surenameError, emailError, passwordError, repeatPasswordError } = store

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
                        <TextField  onChange={this.handleNameInput.bind(this)} 
                                    value={nameInput} id="userName" 
                                    hintText="Informe seu nome" 
                                    floatingLabelText="Nome" 
                                    type="text"
                                    errorText={nameError}
                                    fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField  onChange={this.handleSurenameInput.bind(this)} 
                                    value={sureNameInput} id="userSureName" 
                                    hintText="Informe seu sobrenome" 
                                    floatingLabelText="Sobrenome" 
                                    type="text"
                                    errorText={surenameError}
                                    fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField  onChange={this.handleEmailInput.bind(this)} 
                                    value={emailInput} 
                                    id="userEmail" 
                                    hintText="Informe seu e-mail" 
                                    floatingLabelText="E-mail" 
                                    type="email"
                                    errorText={emailError}
                                    fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField  onChange={this.handlePasswordInput.bind(this)} 
                                    value={passwordInput} 
                                    id="userPassword" 
                                    hintText="Informe sua senha" 
                                    floatingLabelText="Senha" 
                                    type="password" 
                                    errorText={passwordError}
                                    fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField  value={repeatPasswordInput} 
                                    id="userRepeatPassword" 
                                    hintText="Repita sua senha" 
                                    floatingLabelText="Repita sua senha" 
                                    type="password" 
                                    errorText={repeatPasswordError}
                                    fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <RaisedButton
                            onClick={this.fetchSignup.bind(this)}
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