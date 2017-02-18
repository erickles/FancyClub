import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

class EmailLogin extends Component{

    render(){

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

                <TextField id="userEmail" hintText="Informe seu e-mail" floatingLabelText="E-mail" type="text" fullWidth={true} />
                <TextField id="userPassword" hintText="Informe sua senha" floatingLabelText="Senha" type="password" fullWidth={true} />

                <RaisedButton                        
                        target="_blank"
                        fullWidth={true}
                        label="Entrar"
                        style={styles.button}
                        icon={<FontIcon className="muidocs-icon-custom-github" />} />

            </div>

        );

    }

}

export default EmailLogin;