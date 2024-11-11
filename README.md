# Playwright JavaScript Testing Framework

This repository contains a Playwright JavaScript framework designed to automate testing for a web application. Using the Page Object Model (POM) design pattern, this framework covers various end-to-end scenarios including session storage, form fills, login/logout, dropdowns, checkboxes, radio buttons, calendars, web tables, JavaScript alerts, popups, and multi-window handling. The setup includes configurations for both browser specific and cross-browser testing.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)
- [Supported Scenarios](#supported-scenarios)

## Getting Started

This framework uses Playwright for JavaScript to perform automation testing for web applications. Follow the instructions below to set up, configure, and run tests.

## Project Structure

- `tests/` - Contains test scripts for various scenarios.
- `pageObjects/` - Contains json files for each page which conatins respective page locators.
- `pages/` - Implements the Page Object Model (POM) structure, with separate files for each page of the web application.
- `storageState/` - Contains storage session json files.
- `testData/` - Contains test data.
- `playwright.config.js` - Configuration file for Playwright, setting up browsers, test directories, and cross-browser support.
- `tests/login.setup.js` - Stores session data for reuse the session/authenticated tests.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo

2. **Install dependencies:**
   ```bash
   npm install

## Running Tests

1. Run tests with chromium browser
   ```bash
   npx playwright test --project=chromium

2. Run tests with firefox browser
   ```bash
   npx playwright test --project=firefox

3. Run tests with webkit browser
   ```bash
   npx playwright test --project=webkit

4. Run tests with cross-browser
   ```bash
   npx playwright test

## Supported Scenarios
This framework covers the following testing scenarios:

- Session Storage: Storing and reusing the login session.
- Form Handling: Filling and submitting forms
- Login and Logout: Authentication flow
- Dropdowns: Selecting options form dropdown and Multiselct dropdowns
- Checkboxes and Radio Buttons: Selection handling
- Calendars: Date selection
- Web Tables: Table interaction
- JavaScript Alerts: Alert handling (accept, dismiss)
- Popups and Modals: Popup interaction
- Multi-Window Handling: Switching between multiple windows/tabs
