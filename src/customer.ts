export default class Customer {
    private name: string;
    private balance: number;

    constructor(name: string, initialDeposit: number) {
        this.name = name;
        this.balance = initialDeposit;
    }

    getName(): string {
        return this.name;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }

        this.balance -= amount;
    }
    transferMoney(amount: number, toCustomer: Customer): void {
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }

        this.balance -= amount;
        toCustomer.deposit(amount);
    }

    getBalance(): number {
        return this.balance;
    }
}