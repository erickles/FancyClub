import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../../css/pedmobilemulti.css';
import DSMSidebar from '../components/DSMSidebar';

class MenuContent extends Component {

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

export default MenuContent;