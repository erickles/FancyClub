import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import Modal, { closeStyle } from 'simple-react-modal';
import Modal from 'simple-react-modal';
//import '../css/portaldsm.css';

class Dialog extends Component {

    constructor() {
        super()
        this.state = {
            yes: 'Sim',
            ok: 'Ok',
            cancel: 'Cancelar'
        }
    }

    show() {
        this.setState({ show: this.props.show })
    }

    close() {
        this.setState({ show: this.props.show })
    }

    render() {
        var buttons;
        if (this.props.type === 'question') {
                buttons =   <div>
                                <button className="btn btn-default" onClick={this.props.onYes}>{this.state.ok}</button>
                                <button className="btn btn-default" onClick={this.props.onClose}>{this.state.cancel}</button>
                            </div>;
        }else{
                buttons =   <div>
                                <button className="btn btn-default" onClick={this.props.onYes}>{this.state.ok}</button>                
                            </div>;
        }

        return (

            <div className="container-fluid content">

                <Modal id="dialog"
                    show={this.props.show}
                    style={{ background: 'transparent' }}
                    closeOnOuterClick={true}
                    containerStyle={{ background: 'transparent', padding: '0px', width: '60%' }}
                    onClose={this.props.onClose}>

                    <div className="panel panel-default">
                        <div className="panel-heading">{this.props.title}</div>
                        <div className="panel-body">{this.props.message}</div>
                        <div className="panel-footer">
                            {buttons}
                        </div>
                    </div>

                </Modal>

            </div>
        );
    }
}

export default Dialog;