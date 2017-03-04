import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';

@observer
class EmailSignup extends Component {        

    handleEmailInput(e) {
        store.handleEmailInput(e.target.value)
    }

    handleNameInput(e) {
        store.handleNameInput(e.target.value)
    }

    handleSureNameInput(e) {
        store.handleSureNameInput(e.target.value)
    }

    handlePasswordInput(e) {
        store.handlePasswordInput(e.target.value)
    }

    handleRepeatPasswordInput(e) {
        store.handleRepeatPasswordInput(e.target.value)
    }

    componentDidMount(){
        store.setShowLogo(false)
    }

    render() {
        
        const { emailInput, passwordInput, repeatPasswordInput, nameInput, sureNameInput } = store

        return (
            <div>
                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userName" hintText="Informe seu nome" floatingLabelText="Nome" type="text" fullWidth={true} />
                    </div>
                </div>
                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userSureName" hintText="Informe seu sobrenome" floatingLabelText="Sobrenome" type="text" fullWidth={true} />
                    </div>
                </div>
                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userEmail" hintText="Informe seu e-mail" floatingLabelText="E-mail" type="email" fullWidth={true} />
                    </div>
                </div>
                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userPassword" hintText="Informe sua senha" floatingLabelText="Senha" type="password" fullWidth={true} />
                    </div>
                </div>
                <div className="spacing-container">
                    <div className="button-container">
                        <TextField id="userRepeatPassword" hintText="Repita sua senha" floatingLabelText="Senha" type="password" fullWidth={true} />
                    </div>
                </div>
            </div>
        );
    }

}

export default EmailSignup;