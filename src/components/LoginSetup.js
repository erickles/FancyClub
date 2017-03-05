import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'
import { Link } from 'react-router';
import logo from '../images/club_m.jpg'

@observer
class LoginSetup extends Component {

    fetchLogin() {
        store.toogleLogged();
    }

    componentDidMount() {
        store.setShowLogo(true)
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

        const { logged, showingLogo } = store

        return (

            <div>

                <div>

                    {showingLogo ?
                        <center>
                            <img src={logo} className="img-responsive" alt="Cinque Terre" />
                        </center>
                        : ''}

                </div>

                <div>

                    <div className="spacing-container">
                        <div className="button-container">
                            <RaisedButton
                                className="fancy-button"
                                target="_blank"
                                fullWidth={true}
                                label="Entre com seu Facebook"
                                style={styles.button}
                                onClick={this.fetchLogin.bind(this)}
                                icon={<FontIcon className="muidocs-icon-custom-github" />} />
                        </div>
                    </div>

                    <div className="spacing-container">
                        <div className="button-container">
                            <Link type="button" to="EmailLogin">
                                <RaisedButton
                                    className="fancy-button"
                                    target="_blank"
                                    fullWidth={true}
                                    label="Entre com seu e-mail"
                                    style={styles.button}
                                    icon={<FontIcon className="muidocs-icon-custom-github" />} />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        );

    }

}

export default LoginSetup;