import Customer from './customer';

export default class Bank {
    private customers: Map<string, Customer>;

    constructor() {
        this.customers = new Map();
    }

    addCustomer(customer: Customer): void {
        this.customers.set(customer.getName(), customer);
    }

    getCustomer(name: string): Customer | undefined {
        return this.customers.get(name);
    }

    getTotalBalance(): number {
        let totalBalance = 0;
        for (let customer of this.customers.values()) {
            totalBalance += customer.getBalance();
        }
        return totalBalance;
    }
}
