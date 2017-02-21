import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import logo from '../images/club_m.jpg'
import LoginContent from '../components/LoginContent'
import store from '../stores/LoginScreenStore'
import { observer } from 'mobx-react'

@observer
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            open: false
        };
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

        const { emailLogging } = store

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

                    <LoginContent/>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;