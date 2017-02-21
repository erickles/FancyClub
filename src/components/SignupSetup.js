import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'

@observer
class SignupSetup extends Component {

    toogleSigningUp(){
        store.toogleSigningUp()        
    }

    resetScreen(){
        store.resetScreen()
    }

    toogleEmailSigningUp(){
        store.toogleEmailSigningUp()
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

        return (

            <div>

                <RaisedButton
                    target="_blank"
                    fullWidth={true}
                    label="Cadastre-se com o Facebook"
                    style={styles.button}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />

                <RaisedButton
                    target="_blank"
                    fullWidth={true}
                    label="Cadastre-se com seu e-mail"
                    style={styles.button}
                    onClick={this.toogleEmailSigningUp.bind(this)}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />

                <RaisedButton
                    target="_blank"
                    fullWidth={true}
                    label="Já tem o seu cadastro? Faça seu login"
                    onClick={this.resetScreen.bind(this)}
                    style={styles.button}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />

            </div>

        );

    }

}

export default SignupSetup;