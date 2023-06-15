import Bank from '../src/bank';
import Customer from '../src/customer';

test('Bank can add a customer', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);

    bank.addCustomer(john);
    expect(bank.getCustomer('John Doe')).toBe(john);
});

test('Bank can calculate total balance', () => {
    const bank = new Bank();
    const john = new Customer('John Doe', 500);
    const jane = new Customer('Jane Doe', 1000);

    bank.addCustomer(john);
    bank.addCustomer(jane);

    expect(bank.getTotalBalance()).toBe(1500);
});
