# nsw-auto-test

This test suite is for a prospective employer.  It runs automated e2e tests using CucumberJS and the Selenium driver.

## Installation

Requirements
[Nodejs]{https://nodejs.org/en/}

run the following on the command line:
npm install

To run the tests and generate json output:
* npm install

to generate and display the html report:
* node report.js

## Known bugs
- None

Todo:
- Move browser init and closure from Before and After hooks within step definition into hooks.js file