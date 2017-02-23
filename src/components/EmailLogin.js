import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import firebase from 'firebase'

@observer
class EmailLogin extends Component {

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

    fetchLogin() {

        const {emailInput, passwordInput} = store

        firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)            
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if(user.emailVerified){
                    store.toogleLogged();
                }else{
                    console.log('E-mail ainda não verificado! Verifique seu e-mail!')
                }                
            } else {
                // No user is signed in.
                console.log('Usuario não logado!')
            }
        });

    }

    render() {

        const styles = {
            button: {
                margin: 15

            },
            exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
            },
        };

        const {emailInput, passwordInput} = store

        return (

            <div>

                <TextField id="userEmail" value={emailInput} hintText="Informe seu e-mail" onChange={this.handleEmailInput.bind(this)} floatingLabelText="E-mail" type="text" fullWidth={true} />
                <TextField id="userPassword" value={passwordInput} hintText="Informe sua senha" onChange={this.handlePasswordInput.bind(this)} floatingLabelText="Senha" type="password" fullWidth={true} />

                <RaisedButton
                    target="_blank"
                    fullWidth={true}
                    label="Entrar"
                    style={styles.button}
                    onClick={this.fetchLogin.bind(this)}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />

                <RaisedButton
                    target="_blank"
                    fullWidth={true}
                    label="Ainda não possui uma conta? Crie a sua"
                    onClick={this.toogleSigningUp.bind(this)}
                    style={styles.button}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />

            </div>

        );

    }

}

export default EmailLogin;