import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../css/portaldsm.css';
import Sidebar from 'react-sidebar';
import SidebarContent from '../components/SidebarContent';
import Dialog from './Dialog.js';
import logodsm from '../images/logo-dsm.svg';

class DSMSidebar extends Component {

    constructor() {
        super();

        this.state = {
            docked: false,
            open: false
        }

    }

    show() {
        this.setState({ show: true })
    }

    onCancel() {
        console.log('Cancelei...');
        this.setState({ show: false })
    }

    onYes() {
        console.log('Sai...');
        this.setState({ show: false })
    }

    componentWillMount() {
        const mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged.bind(this));
        this.setState({ mql: mql });
        this.setState({ docked: mql.matches });
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetOpen(open) {
        this.setState({ open: false });
    }

    mediaQueryChanged(e) {
        this.setState({ docked: this.state.mql.matches });
    }

    toggleOpen(ev) {

        this.setState({ open: !this.state.open });

        if (ev) {
            ev.preventDefault();
        }
    }

    render() {

        const sidebarContent = {
            navigate: this.navigate,
            location: this.props.location,
            onSetOpen: this.onSetOpen.bind(this),
            showDialog: this.show.bind(this)
        };

        const sidebar = <SidebarContent {...sidebarContent} />;

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen.bind(this),
            showDialog: this.show.bind(this)
        };

        return (

            <Sidebar {...sidebarProps}>

                <nav className="navbar navbar-default" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span>
                                {!this.state.docked && <a className="navbar-brand" onClick={this.toggleOpen.bind(this)} href="#"><span id="menu-icon" className="glyphicon glyphicon-menu-hamburger"></span></a>}
                                <a className="navbar-brand">Portal DSM</a>
                            </span>

                            {this.state.docked && <button className="btn btn-default navbar-btn pull-right" onClick={this.show.bind(this)}>Sair</button>}

                        </div>

                    </div>
                </nav>

                <div id="pageContent" className="container-fluid">
                    <Dialog type="question" show={this.state.show}
                        onClose={this.onCancel.bind(this)}
                        onYes={this.onYes.bind(this)}
                        title="Deseja realmente sair?"
                        message="Toda informação não salva será perdida." />
                    {this.props.childs}
                </div>

            </Sidebar>
        );

    }

}

export default DSMSidebar;