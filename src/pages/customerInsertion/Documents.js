import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'

class Documents extends Component {

    render() {

        return (

            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label for="exampleInputFile">Documentação</label>
                        <input className="file" type="file" id="exampleInputFile" multiple data-show-upload="false" data-show-caption="true"/>                        
                    </div>
                </form>
            </div>

        );
    }
}

export default Documents;