# Playwright JavaScript Testing Framework
![GitHub Stars](https://img.shields.io/github/stars/dvhiremath26/playwright-javascript-framework?style=social)
[![Regression-Testing](https://github.com/dvhiremath26/Playwright-Javascript-Framework/actions/workflows/regression-testing.yml/badge.svg)](https://github.com/dvhiremath26/Playwright-Javascript-Framework/)
[![HTML Report](https://img.shields.io/badge/HTML-Test_Report-purple)](https://dvhiremath26.github.io/Playwright-Javascript-Framework/)
![Languages](https://img.shields.io/github/languages/top/dvhiremath26/playwright-javascript-framework)
![Open Issues](https://img.shields.io/github/issues/dvhiremath26/playwright-javascript-framework)
![Pull Requests](https://img.shields.io/github/issues-pr/dvhiremath26/playwright-javascript-framework)


This repository contains a Playwright JavaScript framework designed to automate testing for a web application. Using the Page Object Model (POM) design pattern, this framework covers various end-to-end scenarios including session storage, form fills, login/logout, dropdowns, checkboxes, radio buttons, calendars, web tables, JavaScript alerts, popups, and multi-window handling. The setup includes configurations for both browser specific and cross-browser testing.

## Table of Contents
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)
- [Supported Scenarios](#supported-scenarios)
- [Test Reports](#test-reports)


## Getting Started

This framework uses Playwright for JavaScript to perform automation testing for web applications. Follow the instructions below to set up, configure, and run tests.


### Project Structure

- `tests/` - Contains test scripts for various scenarios.
- `pageObjects/` - Contains json files for each page which conatins respective page locators.
- `pages/` - Implements the Page Object Model (POM) structure, with separate files for each page of the web application.
- `storageState/` - Contains storage session json files.
- `testData/` - Contains test data.
- `playwright.config.js` - Configuration file for Playwright, setting up browsers, test directories, and cross-browser support.
- `tests/login.setup.js` - Stores session data for reuse the session/authenticated tests.


### Environment Variables
The following environment variables are used in the project:

| Variable Name       | Variable Value      | Description         |
|---------------------|---------------------|---------------------|
| TEST_URL            | https://example.com | The URL of your testing applicating     |
| EMAIL               | your email          | Valid email    |
| PASSWORD            | your passowrd       | Valid passowrd    |



### Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dvhiremath26/Playwright-Javascript-Framework.git  

2. **Install dependencies:**
   ```bash
   npm install

3. **Install browsers**
   ```bash
   npx playwright install

### Running Tests

1. Run tests with chromium browser
   ```bash
   npx playwright test --project=chromium

2. Run tests with firefox browser
   ```bash
   npx playwright test --project=firefox

3. Run tests with webkit browser
   ```bash
   npx playwright test --project=webkit

4. Run tests with cross-browsers
   ```bash
   npx playwright test

### Supported Scenarios
This framework covers the following testing scenarios:

- Session Storage: Storing and re-using the login session.
- Form Handling: Filling and submitting forms
- Login and Logout: Authentication flow
- Dropdowns: Selecting options form dropdown and Multiselct dropdowns
- Checkboxes and Radio Buttons: Selection handling
- Calendars: Date selection
- Web Tables: Table interaction
- JavaScript Alerts: Alert handling (accept, dismiss)
- Popups and Modals: Popup interaction
- Multi-Window Handling: Switching between multiple windows/tabs

### Test Reports
This framework contains built-in playwright html report and implemented Allure report.

1. **Open Playwright html report:**
   ```bash
   npx playwright shoow-report 

2. **Open Allure report:**
   ```bash
   allure serve allure-results
