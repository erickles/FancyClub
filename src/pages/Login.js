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
                <div className="container-fluid">

                    <Drawer open={this.state.open} docked={true} open={this.state.open} onRequestChange={(open) => this.setState({ open })}>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                    <AppBar title="Fancy Club" onLeftIconButtonTouchTap={this.handleTouchTap} iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    <TextField hintText="Password Field" floatingLabelText="Password" type="password" />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;