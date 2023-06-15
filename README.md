# Bank Application

This application simulates a basic banking system where customers can deposit, withdraw and transfer money between each other. 

## How to run the tests

To run the tests, first install the project dependencies:

```bash
npm install
```
Then, you can run the tests with:
```bash
npm test
```

## Design Choices
In designing this application, we made a number of decisions to ensure that the code is clean, scalable, and maintainable:

### TypeScript: 
We chose to use TypeScript instead of plain JavaScript to benefit from the static type checking that TypeScript offers. This not only makes the code less prone to runtime errors but also makes the code more self-documenting.

### Object-Oriented Programming:
 We used the principles of object-oriented programming and encapsulated the related data and behaviors into three classes: `Customer`  `Bank` and `AccessManager` .

#### The` Customer` class
 represents a bank customer.
#### The `Bank` class 
Represents the bank. 

#### The `AccessManager` Class

Serves as the interface between `customers` and the `bank`, enforcing access controls by allowing customers to interact only with their own accounts and preventing them from viewing or modifying other accounts.

This design allows for easy addition of new features and ensures that the bank's state is always consistent.

The application is written in TypeScript for improved type safety and autocompletion support in many IDEs.

### Error Handling: 
To ensure that customers cannot withdraw more than their current balance, we check the withdrawal amount against the current balance and throw an error if it exceeds.

## Testing: 
We used Jest, a popular JavaScript testing framework, to write unit tests for our classes. This helps us ensure the correctness of the code and prevent regression bugs in the future.The tests are located in the test directory.

By following these design choices, we can ensure that our codebase is robust, easier to debug, and easier to maintain and expand in the future.

## Test Case Explanation
The test cases are designed to verify the basic functionality of the 'Customer', 'Bank', and 'AccessManager' classes.

### Customer Test Cases:

**Customer can deposit money** checks if a customer can deposit money into their account.  
**Customer can withdraw money'** checks if a customer can withdraw money from their account.  
**Customer cannot withdraw more money than balance** checks if an error is thrown when a customer tries to withdraw more money than they have in their account.

**Customer can transfer money to another customer** verifies the successful transfer of money between customers.

**Customer cannot transfer more money than they have in their account** checks that an error with the message "Insufficient balance" is thrown. This confirms the application's ability to prevent overdrafts during money transfers.

### Bank Test Cases:

**Bank can add a customer** checks if the bank can add a customer.  
**Bank can calculate total balance** checks if the bank can correctly calculate the total balance of all its customers.
### AccessManager Test Cases:

**AccessManager can deposit money for a customer** checks if the access manager can deposit money into a customer's account.  

**AccessManager can withdraw money for a customer** checks if the access manager can withdraw money from a customer's account.  

**AccessManager can get the balance for a customer**checks if the access manager can correctly get the balance of a customer's account.  

**AccessManager can get the total balance of the bank** if the access manager can correctly get the total balance of the bank.  

**AccessManager can transfer money between customers** verifies the successful facilitation of money transfer between customers by the AccessManager.
  
Each test case creates instances of the relevant classes, performs a set of operations, and then checks if the result matches the expected outcome using Jest's expect function. This ensures that each class and method performs as expected under a variety of conditions.