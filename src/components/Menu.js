import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import LayoutContent from '../components/LayoutContent';
import Home from '../pages/Home';
import OrderSale from '../pages/OrderSale';
import CustomerInsertion from '../pages/CustomerInsertion';
import Profile from '../pages/Profile';
import MaintenanceConsult from '../pages/MaintenanceConsult';
import Comissions from '../pages/Comissions';
import BankSlips from '../pages/BankSlips';
import Customers from '../pages/Customers';
import MenuContent from './MenuContent';

class Menu extends React.Component {

    render() {        

        return (            
            
            <Router history={browserHistory}>
                <Route path="/" component={MenuContent}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="order" name="Pedido de Venda" component={OrderSale}></Route>
                    <Route path="customerinsertion" component={CustomerInsertion}></Route>
                    <Route path="profile" component={Profile}></Route>
                    <Route path="maintenanceConsult" component={MaintenanceConsult}></Route>

                    <Route path="comissions" component={Comissions}></Route>
                    <Route path="bankslips" component={BankSlips}></Route>
                    <Route path="customers" component={Customers}></Route>
                </Route>
            </Router>
        
        );
    }
}

export default Menu;