import React from 'react';
import { Link } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../css/pedmobilemulti.css';

const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class Accordion extends React.Component {

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

    render() {

        const stateStyle = this.state.active ? styles.active : styles.inactive;
        
        if (this.props.content.hasDetails) {

            const Links = this.props.content.SubMenu.map((detail) => {
                if (detail.hasDetails) {
                    return <Link id={detail.url} type="button" onClick={this.props.onSetOpen} className="list-group-item subitem" key={detail.url + '/' + detail.Options[0].url} to={detail.url + '/' + detail.Options[0].url}>{detail.name}</Link>;
                } else {
                    return <Link id={detail.url} type="button" onClick={this.props.onSetOpen} className="list-group-item subitem" key={detail.url} to={detail.url}>{detail.name}</Link>;
                }

            });

            return (

                <section>
                    <a type="button" className="list-group-item" onClick={this.toggle} style={styles.sidebarLink}>{this.props.content.name}</a>
                    <div className="list-group" style={stateStyle}>
                        {Links}
                    </div>
                </section>

            );
        }
        else {
            if (this.props.content.submenuUrl) {
                return (
                    <Link id={this.props.content.url} type="button" onClick={this.props.onSetOpen} className="list-group-item" key={this.props.content.submenuUrl + '/' + this.props.content.url} to={this.props.content.submenuUrl + '/' + this.props.content.url}>{this.props.content.name}</Link>
                );
            } else
                return (
                    <Link id={this.props.content.url} type="button" onClick={this.props.onSetOpen} className="list-group-item" key={this.props.content.url} to={this.props.content.url}>{this.props.content.name}</Link>
                );
        }

    }

}

Accordion.propTypes = {
    content: React.PropTypes.object.isRequired
}

export default Accordion;