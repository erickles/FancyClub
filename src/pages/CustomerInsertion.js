import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import { browserHistory } from 'react-router';

class CustomerInsertion extends Component {
    
    render() {        

        //browserHistory.push('/customerInsertion/' + this.props.params.option);
        console.log('Props:',this.props);
        return (

            <div className="container-fluid">
                <label className="control-label col-sm-2" htmlFor="customerCode">Código:</label>
                <div className="col-sm-2">
                    <input disabled type="text" id="customerCode" placeholder="Cliente" />
                </div>
            </div>

        );
    }
}

export default CustomerInsertion;