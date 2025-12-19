# AutomationExercise – Playwright Test Framework

End-to-end and API test automation framework built with Playwright + TypeScript for
[https://automationexercise.com]

This project demonstrates:
* UI automation using Page Object Model (POM)
* API setup and cleanup for test data
* Data-driven testing using JSON
* Reliable test isolation and execution
---
## Tech Stack
* Playwright
* TypeScript
* Node.js
* GitHub
---
## Project Structure
```
automationexercise/
├── src/
│   ├── resources/
│   │   ├── pages/            # Page Object Model classes
│   │   ├── test-data/        # JSON files for data-driven testing
│   │   ├── test-fixtures/    # Common test fixtures
│   │   └── utils/            # Shared helper functions
│   └── tests/
│       ├── api/              # API test specs
│       └── ui/               # UI test specs
├── .github/
│   └── workflows/             # GitHub Actions CI workflows
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts       # Playwright configuration
└── README.md

```
---
## Installation

### 1. Clone the repository
```bash
git clone https://github.com/jacknorts/automationexercise.git
cd automationexercise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Debug mode

```bash
npx playwright test --debug
```

---

## Reports

After a test run, open the HTML report:

```bash
npx playwright show-report
```

---

## Test Design

### Page Object Model (POM)

* Each page has:

  * **Locators**
  * **Actions**
  * **State checks**

---

### Data-Driven Testing

Test data is stored in JSON files:

```ts
import common from '../data/common.json';
```

Allows:

* Easy test reuse
* Cleaner test code
* Simple data changes

---

## API Integration

The framework uses APIs to:

* Check if a user already exists
* Delete users before tests run
* Create clean test data

---

## Test Isolation

* API cleanup runs in `beforeAll`
* UI tests assume a clean state
* Parallel execution disabled where shared data exists

---

## Best Practices Followed

* Role-based locators where possible
* Stable selectors (`data-qa`)
* No hard-coded credentials
* Clear separation of concerns

---

## Future Improvements

* CI integration (GitHub Actions)
* Parallel-safe test data
* Visual regression tests
* API-only test suite

---

## Author

**Jack Norton**
QA Automation Engineer
