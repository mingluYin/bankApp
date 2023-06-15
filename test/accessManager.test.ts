import Bank from '../src/bank';
import Customer from '../src/customer';
import AccessManager from '../src/accessManager';

test('AccessManager can deposit money for a customer', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    bank.addCustomer(john);

    const accessManager = new AccessManager(bank);
    accessManager.deposit('John Doe', 500);

    expect(john.getBalance()).toBe(1000);
});

test('AccessManager can withdraw money for a customer', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    bank.addCustomer(john);

    const accessManager = new AccessManager(bank);
    accessManager.withdraw('John Doe', 200);

    expect(john.getBalance()).toBe(300);
});

test('AccessManager can get the balance for a customer', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    bank.addCustomer(john);

    const accessManager = new AccessManager(bank);
    const balance = accessManager.getBalance('John Doe');

    expect(balance).toBe(500);
});

test('AccessManager can get the total balance of the bank', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    const jane = new Customer('Jane Doe', 1000);
    bank.addCustomer(john);
    bank.addCustomer(jane);

    const accessManager = new AccessManager(bank);
    const totalBalance = accessManager.getTotalBalance();

    expect(totalBalance).toBe(1500);
});
test('AccessManager can transfer money between customers', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    const jane = new Customer('Jane Doe', 200);
    bank.addCustomer(john);
    bank.addCustomer(jane);

    const accessManager = new AccessManager(bank);
    accessManager.transfer('John Doe', 'Jane Doe', 200);

    expect(john.getBalance()).toBe(300);
    expect(jane.getBalance()).toBe(400);
});
