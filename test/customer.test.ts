import Customer from '../src/customer';

test('Customer can deposit money', () => {
    const customer = new Customer('John Doe', 500);
    customer.deposit(500);
    expect(customer.getBalance()).toBe(1000);
});

test('Customer can withdraw money', () => {
    const customer = new Customer('John Doe', 500);
    customer.withdraw(200);
    expect(customer.getBalance()).toBe(300);
});

test('Customer cannot withdraw more money than balance', () => {
    const customer = new Customer('John Doe', 500);
    expect(() => customer.withdraw(600)).toThrow('Insufficient balance');
});

test('Customer can transfer money to another customer', () => {
    const john = new Customer('John Doe', 500);
    const jane = new Customer('Jane Doe', 200);
    john.transferMoney(200, jane);
    expect(john.getBalance()).toBe(300);
    expect(jane.getBalance()).toBe(400);
});

test('Customer cannot transfer more money than they have in their account', () => {
    const john = new Customer('John Doe', 500);
    const jane = new Customer('Jane Doe', 200);
    expect(() => john.transferMoney(600, jane)).toThrow('Insufficient balance');
});