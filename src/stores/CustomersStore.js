import { computed, observable } from 'mobx'

class Customer{

    @observable customerCode
    @observable customerName
    @observable customerActive

    constructor(name){
        this.customerCode = Date.now
        this.customerName = name
        this.customerActive = true
    }

}

export class CustomersStore {    
    @observable customers = []
    @observable filter = ""
    @computed get filteredCustomers(){
        var matchesFilter = new RegExp(this.filter,"i")
        return this.customers.filter(customer => !this.filter || matchesFilter.test(customer.customerName))
    }

    createCustomer(value){
        this.customers.push(new Customer(value))
    }

    clearComplete = () => {
        const inactiveCustomers = this.customers.filter(customer => !customer.customerActive)
        this.customers.replace(inactiveCustomers)
    }

}

export default new CustomersStore