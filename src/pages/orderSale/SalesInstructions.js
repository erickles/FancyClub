import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'

class SalesInstructions extends Component {       

    render() {        
        
        console.log(this.props);

        return (

            <div className="container-fluid">
                <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>

        );
    }
}

export default SalesInstructions;