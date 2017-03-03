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

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    toogleEmailLogging() {
        store.toogleEmailLogging()
    }

    toogleSigningUp() {
        store.toogleSigningUp()
    }

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Terminar' : 'Próximo'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Voltar"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

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

    render() {

        const { finished, stepIndex } = this.state;
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