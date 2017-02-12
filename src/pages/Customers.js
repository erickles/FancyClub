import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import store from '../stores/CustomersStore'
import { observer } from 'mobx-react'

@observer
class Customers extends Component {       

    createNew(e){
        if(e.which === 13){
            store.createCustomer(e.target.value)
            e.target.value = ""
        }
    }

    filter(e){
        store.filter = e.target.value
    }

    toggleActive(customer){
        customer.customerActive  = !customer.customerActive
    }

    render() {

        const { filter, filteredCustomers, customers, clearComplete } = store

        const customersList = filteredCustomers.map(customer => (
            <li key={customer.customerName}>
                <input type="checkbox" onChange={this.toggleActive.bind(this,customer)} value={customer.customerName} checked={customer.customerActive}/>{customer.customerName}</li>
        ))

        return (
            <div className="container-fluid">
                <h1>Clientes</h1>
                <input className="create" onKeyPress={this.createNew.bind(this)}/>
                <input className="filter" value={filter} onChange={this.filter.bind(this)}/>
                <ul>{customersList}</ul>
                <a href="#" onClick={clearComplete}>Clear complete</a>
            </div>            

        );
    }
}

export default Customers;