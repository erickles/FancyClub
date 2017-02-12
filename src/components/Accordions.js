import React from 'react';
import Accordion from './Accordion';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../css/portaldsm.css';

class Accordions extends React.Component {

    constructor() {
        super();
        this.state = {
            active: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            active: !this.state.active
        });
    }

    close() {
        //console.log(this.props.sideBarProps);
    }    

    render() {        

        const AccordionValues = this.props.content.map((value) => {
            return <Accordion key={value.name} content={value} onSetOpen={this.props.onSetOpen}/>;
        });
        
        return (
            <div>{AccordionValues}</div>
        );

    }

}

export default Accordions;