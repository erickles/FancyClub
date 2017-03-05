import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import logo from '../images/club_m.jpg'

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

    fetchLogin() {
        store.toogleLogged();
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

        const { logged, showingLogo } = store

        return (

            <MuiThemeProvider>

                <div>

                    {logged ?
                        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
                            <MenuItem onTouchTap={this.handleClose}>Início</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Perfil</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Configurações</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Sair</MenuItem>
                        </Drawer>
                        : ''}

                    {logged ?
                        <AppBar title="Fancy Club" onLeftIconButtonTouchTap={this.handleTouchTap} iconClassNameRight="muidocs-icon-navigation-expand-more" />
                        : ''}

                    {this.props.children}

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;