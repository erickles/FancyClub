import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import EmailLogin from '../components/EmailLogin'
import LoginSetup from '../components/LoginSetup'
import SignupSetup from '../components/SignupSetup'
import EmailSignup from '../components/EmailSignup'

@observer
class LoginContent extends Component {

    render() {

        const { emailLogging, signingUp, emailSigningUp } = store

        if (emailLogging)
            return (<EmailLogin />)
        else
            if (signingUp) {
                return (<SignupSetup />)
            } else
                if (emailSigningUp)
                    return (<EmailSignup />)
                else
                    return (
                        <LoginSetup />
                    );

    }

}

export default LoginContent;