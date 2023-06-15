import Bank from './bank';
import Customer from './customer';

export default class AccessManager {
    private bank: Bank;

    constructor(bank: Bank) {
        this.bank = bank;
    }

    deposit(customerName: string, amount: number): void {
        const customer = this.bank.getCustomer(customerName);
        if (customer) {
            customer.deposit(amount);
        }
    }

    withdraw(customerName: string, amount: number): void {
        const customer = this.bank.getCustomer(customerName);
        if (customer) {
            customer.withdraw(amount);
        }
    }

    getBalance(customerName: string): number | undefined {
        const customer = this.bank.getCustomer(customerName);
        if (customer) {
            return customer.getBalance();
        }
    }
    
    transfer(fromCustomerName: string, toCustomerName: string, amount: number): void {
        const fromCustomer = this.bank.getCustomer(fromCustomerName);
        const toCustomer = this.bank.getCustomer(toCustomerName);

        if (fromCustomer && toCustomer) {
            fromCustomer.transferMoney(amount, toCustomer);
        }
    }

    getTotalBalance(): number {
        // This method should be protected in a real-world application
        return this.bank.getTotalBalance();
    }
}
