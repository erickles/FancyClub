import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';

//Classe principal, que esta mostrando a tela de login com os links
class Main extends Component {

    render() {                
        return (
            <div>
                {this.props.children}                
            </div>        
        );
    }
}

export default Main;