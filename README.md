﻿# nsw-auto-test

This test suite  runs automated e2e tests using CucumberJS and the Selenium driver.

## Installation

Requirements
* [Nodejs](https://nodejs.org/en/)

To run the tests and generate json output:
* npm install
* npm test

to generate and display the html report:
* node report.js

## Known bugs
- None

## Todo
- Move browser open and closing from Before and After hooks within step definition into hooks.js file
