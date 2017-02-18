import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import logo from '../images/club_m.jpg'
import EmailLogin from '../components/EmailLogin'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleTouchTap = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

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
            <MuiThemeProvider>
                <div>

                    <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>

                    <AppBar title="Fancy Club" onLeftIconButtonTouchTap={this.handleTouchTap} iconClassNameRight="muidocs-icon-navigation-expand-more" />

                    <center>
                        <img src={logo} className="img-responsive" alt="Cinque Terre" />
                    </center>

                    <RaisedButton                        
                        target="_blank"
                        fullWidth={true}
                        label="Entre com o Facebook"
                        style={styles.button}
                        icon={<FontIcon className="muidocs-icon-custom-github" />} />

                    <RaisedButton                        
                        target="_blank"
                        fullWidth={true}
                        label="Entre com seu e-mail"
                        style={styles.button}
                        icon={<FontIcon className="muidocs-icon-custom-github" />} />

                    <EmailLogin/>

                    <RaisedButton                        
                        target="_blank"
                        fullWidth={true}
                        label="Ainda não fez o seu cadastro? Faça agora!"
                        style={styles.button}
                        icon={<FontIcon className="muidocs-icon-custom-github" />} />

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;