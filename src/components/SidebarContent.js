import React, { Component } from 'react';
import Accordions from './Accordions';
//import 'bootstrap/dist/css/bootstrap.css';
import menuData from '../json/menu.json';
import { browserHistory } from 'react-router';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '0px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '0 0 0 0',
    height: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: '0px',
    height: '100%',
    backgroundColor: '#145288',
  },
};


class SidebarContent extends Component {

  constructor() {
    super();

    this.state = {
      menuContent: menuData.Menus.Menu,
      currentMenuContent: menuData.Menus.Menu,
      currentUrl: '/',
      menuOption: false
    };

  }

  navigateBack() {
    browserHistory.goBack();
  }

  leaveFunction() {

  }

  componentDidUpdate() {    

    var root = this.props.location.substring(0, this.props.location.lastIndexOf("/") + 1);
    var param = this.props.location.substring(this.props.location.lastIndexOf("/") + 1, this.props.location.length);

    root = root.replace('/', '');
    param = param.replace('/', '');

    var obj;

    if (root === "")
      obj = this.getObject(this.state.menuContent, 'url', param);
    else
      obj = this.getObject(this.state.menuContent, 'url', root);

    //if(obj)
    //console.log('Objeto encontrado',obj);

    //if(obj && obj.url)
    //console.log('Url encontrada',obj.url);

    if (obj !== null && obj.menuOption && obj.url === root) {

      if (this.state.currentMenuContent !== obj.Options) {
        this.setState({
          currentMenuContent: obj.Options,
          menuOption: true
        });
      }

    } else {

      if (this.state.currentMenuContent !== this.state.menuContent && (obj !== null || this.props.location === "/")) {
        this.setState({
          currentMenuContent: this.state.menuContent,
          menuOption: false
        });
      }

    }

  }

  getObject(theObject, tag, value) {
    var result = null;
    if (theObject instanceof Array) {
      for (var i = 0; i < theObject.length; i++) {
        result = this.getObject(theObject[i], tag, value);
        if (result) {
          break;
        }
      }
    }
    else {
      for (var prop in theObject) {
        if (prop === tag) {
          if (theObject[prop] === value) {
            return theObject;
          }
        }
        if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
          result = this.getObject(theObject[prop], tag, value);
          if (result) {
            break;
          }
        }
      }
    }
    return result;
  }

  // Toda vez que o usuario clicar em qualquer opcao da sidebar, ele é renderizado
  render() {

    const leaveOption = <il id="leave" type="button" onClick={this.props.showDialog} className="list-group-item">Sair</il>;
    const backOption = <il id="back" type="button" onClick={this.props.showDialog} className="list-group-item" >Voltar</il>;

    return (

      <div style={styles.content}>
        <ul className="list-group">
          {this.state.menuOption && backOption}
          <Accordions content={this.state.currentMenuContent} onSetOpen={this.props.onSetOpen} />
          {leaveOption}
        </ul>
      </div>

    );

  };
}

SidebarContent.propTypes = {
  style: React.PropTypes.object,
};

export default SidebarContent;