import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../css/portaldsm.css';
import DSMSidebar from './DSMSidebar';

class LayoutContent extends Component {

    componentWillMount() {
        this.setState({
            content: this.props.children
        });

    }

    render() {        
        
        return (

            <div className="container-fluid">
                <DSMSidebar childs={this.props.children} location={this.props.location.pathname}/>
            </div>

        );
    }
}

export default LayoutContent;