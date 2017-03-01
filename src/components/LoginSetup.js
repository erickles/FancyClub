import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'

@observer
class LoginSetup extends Component {

    toogleEmailLogging() {
        store.toogleEmailLogging()
    }

    resetScreen() {
        store.resetScreen()
    }

    toogleSigningUp() {
        store.toogleSigningUp()
    }

    fetchLogin() {
        store.toogleLogged();
    }

    render() {

        const styles = {
            button: {
                margin: 0
            },
            imageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
            }
        };

        return (

            <div>
                <div>
                    <div className="spacing-container">
                        <div className="button-container">
                            <RaisedButton
                                className="fancy-button"
                                target="_blank"
                                fullWidth={true}
                                label="Entre com o Facebook"
                                style={styles.button}
                                onClick={this.fetchLogin.bind(this)}
                                icon={<FontIcon className="muidocs-icon-custom-github" />} />
                        </div>
                    </div>

                    <div className="spacing-container">
                        <div className="button-container">
                            <RaisedButton
                                className="fancy-button"
                                target="_blank"
                                fullWidth={true}
                                label="Entre com seu e-mail"
                                style={styles.button}
                                onClick={this.toogleEmailLogging.bind(this)}
                                icon={<FontIcon className="muidocs-icon-custom-github" />} />
                        </div>
                    </div>
                </div>                          

            </div>

        );

    }

}

export default LoginSetup;