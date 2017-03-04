import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import firebase from 'firebase'
import Dialog from 'material-ui/Dialog';
import { Link } from 'react-router';

@observer
class EmailLogin extends Component {

    // Dialog
    state = {
        open: false,
        message: "",
        title: ""
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    // Dialog

    toogleEmailLogging() {
        store.toogleEmailLogging()
    }

    toogleSigningUp() {
        store.toogleSigningUp()
    }

    handleEmailInput(e) {
        store.handleEmailInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.handlePasswordInput(e.target.value)
    }

    handleDialogMessage(errorCode, erroMessage) {

        switch (errorCode) {

            case 'auth/user-not-found':
                this.setState({ title: 'E-mail não cadastrado', message: 'Você ainda não tem cadastro com este e-mail, faça seu cadastro!' });
                break;

                 case 'auth/invalid-email':
                 this.setState({ title: 'E-mail inválido', message: 'Informe um e-mail válido!' });
                 break;
//auth/wrong-password
            default:
                this.setState({ title: errorCode, message: erroMessage});
                break;

        }

    }

    fetchLogin() {

        const {emailInput, passwordInput} = store

        const openDialog = (errorCode, errorMessage) => {
            this.handleDialogMessage(errorCode, errorMessage)
            this.handleOpen();
        }

        firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            openDialog(errorCode, errorMessage)
        });

        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                if (user.emailVerified) {
                    store.toogleLogged();
                } else {                    
                    openDialog('E-mail ainda não verificado!', 'Verifique seu e-mail!')
                }
            } else {
                // No user is signed in.

            }
        });

    }

    componentDidMount(){
        store.setShowLogo(true)
    }

    render() {

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const {emailInput, passwordInput} = store

        return (

            <div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userEmail" value={emailInput} hintText="Informe seu e-mail" onChange={this.handleEmailInput.bind(this)} floatingLabelText="E-mail" type="text" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userPassword" value={passwordInput} hintText="Informe sua senha" onChange={this.handlePasswordInput.bind(this)} floatingLabelText="Senha" type="password" fullWidth={true} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <RaisedButton
                            target="_blank"
                            fullWidth={true}
                            label="Entrar"
                            onClick={this.fetchLogin.bind(this)}
                            icon={<FontIcon className="muidocs-icon-custom-github" />} />
                    </div>
                </div>

                <div className="spacing-container">
                    <div className="button-container">
                        <Link type="button" to="emailSignup">
                        <RaisedButton
                            target="_blank"
                            fullWidth={true}
                            label="Ainda não tem cadastro? Faça agora!"                            
                            icon={<FontIcon className="muidocs-icon-custom-github" />} />
                        </Link>
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

export default EmailLogin;