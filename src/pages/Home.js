import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../css/portaldsm.css';
//import OrderStore from '../../stores/OrderStore';
//import Order from '../../components/Order';
//import OrderComponent from '../../components/OrderComponent';
//import * as OrderActions from '../../actions/OrderActions';

class Home extends Component {

    constructor() {
        super();
        //this.getOrders = this.getOrders.bind(this);
        //this.state = {
            //orders: OrderStore.getAll(),
        //};
    }

    //componentWillMount(){
        //OrderStore.on("change", this.getOrders);    
    //}

    //componentWillUnmount(){
        //OrderStore.removeListener("change", this.getOrders);
    //}

    //getOrders(){
        //this.setState({
                //orders: OrderStore.getAll(),            
        //});
    //}

    //createOrder(){
        //OrderActions.createOrder(Date.now());
    //}

    //reloadOrders(){
        //OrderActions.reloadOrders();
    //}

    render() {

        //const { orders } = this.state;

        //const OrderComponents = orders.map((order) => {
            //return <Order key={order.orderNumber} {...order}/>;
        //});

        return (
            <div>
                <h1>Tela inicial</h1>                
            </div>
        );
    }
}

export default Home;