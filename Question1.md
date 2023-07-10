
# Test Plan: Login Functionality

## Test Objective
The objective of this test plan is to verify the functionality of the login feature.

## Test Environment
The test environment should include the following components:

1. Test Framework: Cypress
2. Programming Language: JavaScript/Typescript
3. Test Data: Valid and Invalid credentials for login

## Test Cases 
1. Verify if a user can log in with a valid username and password
    * Enter a valid username and password.
    * Click on the login button.
    * Validate that the user is successfully logged in and redirected to the expected page.
2. Verify if a user cannot log in with an invalid username or password
    * Enter an invalid username and/or password.
    * Click on the login button.
    * Validate that the user receives an error message indicating invalid credentials and is not logged in.
3. Verify that all the labels and controls, including text boxes, buttons, and links, are present on the login page
    * Inspect the login page and verify the presence of all the required labels, text boxes, buttons, and links.
4. Verify that users cannot exceed the limit while entering the password
    * Enter a password that exceeds the maximum limit.
    * Validate that the system restricts the user from entering more characters than allowed.
5. Verify the functionality of the "Show Password" feature
    * Enter a password in the password field.
    * Click on the "Show Password" checkbox.
    * Validate that the password is displayed in plaintext.
    * Click on the checkbox again and validate that the password is masked.
6. Verify the functionality of the "Remember Me" checkbox
    * Log in with valid credentials.
    * Check the "Remember Me" checkbox.
    * Log out and close the application.
    * Reopen the application and verify if the user is automatically logged in.

## Test Execution:
- Use cypress to implement the test cases.
- Create test scripts for each test case
- Execute the test scripts to validate the login functionality.
## Test Reporting:
- Capture screenshots or video recordings of test execution for documentation.
- Record test results, including any failures or issues encountered during the test execution.
- Generate a test report summarizing the test execution and results.
- Remember to adjust the test plan and implementation based on the specific application and requirements of the login functionality being tested.




