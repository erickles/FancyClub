import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleTouchTap = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {

        return (
            <MuiThemeProvider>
                <div>

                    <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                    <AppBar title="Fancy Club" onLeftIconButtonTouchTap={this.handleTouchTap} iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    <TextField id="userCode" hintText="Informe seu usuário" floatingLabelText="Usuário" type="text" fullWidth={true}/>
                    <TextField id="userPassword" hintText="Informe sua senha" floatingLabelText="Senha" type="password" fullWidth={true}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;