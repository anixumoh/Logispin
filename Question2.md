# How to run cypress

Download the project to your local system
Open the project in an IDE (Visual code or  Webstorm )
Run "npm install" to install node to the project in the IDE

## TEST EXECUTION

Tests can be executed using the test scripts configured in "package.json"
* "cy:run:prod": "npx cypress run --env ENV=production" executes test in production environment
* "cy:run:stage": "npx cypress run --env ENV=staging" executes test in staging environment

Tests can also be executed using Test Runner using "npx cypress open" but will point to the default environment which is configured in "cypress.config.ts"

## CONFIGURATION

The config file contains a plugin which sets baseUrl according to the value of the environment variable
The default environment has also been configured to enable the application be tested locally using the test runner

## POM

Page objects are written in logispin_assessment\cypress\pom\GooglePage.ts
Each page would be represented by a class which would contain functions and locators which would reference elements in the browser according to their respective environments. These objects can then be called in the test class.

## TESTS

Test are written in split_configuration.cy.ts
The test block contains a condition which would execute test based on the environment that is set when the test is executed. Each condition that is executed would contain variables, elements and assertions according to it's respective environment.

## VIDEOS
Videos from the outcome of the run can be located "logispin_assessment\cypress\videos"







