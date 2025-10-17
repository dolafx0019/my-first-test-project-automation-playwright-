# Playwright E2E Tests

Automated End-to-End (E2E) Testing Suite for Web Applications

---

## Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

---

## About
This project provides automated E2E tests using [Playwright](https://playwright.dev/) and TypeScript. It aims to ensure high quality and regression-free releases for web applications via robust and scalable test cases. Example scenarios implemented include user registration and verifying product quantity in cart on [automationexercise.com](https://automationexercise.com).

## Tech Stack
- [Playwright](https://playwright.dev/) (v1.56.0)
- TypeScript
- Node.js

## Project Structure
```
project-root/
├── tests/                     # All test specifications organized per site or feature
│   ├── registerUser(pom).spec.ts       # Example E2E registration test
│   └── automationexercise.com/
│       └── VerifyProductquantityinCart.spec.ts
├── pages/                     # Page Object Model (POM) classes
│   ├── AccountPage.ts
│   └── SignupPage.ts
├── playwright.config.ts       # Playwright configuration
├── package.json               # Project dependencies
├── LICENSE
├── README.md
```
--------------------------------
## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/dolafx0019/my-first-test-project-automation-playwright-.git
   cd your-repo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **(Optional) Install Browsers:**
   Playwright will prompt to install supported browsers the first time you run tests. You can also run:
   ```bash
   npx playwright install
   ```

## Running the Tests
Execute all tests using Playwright Test Runner:
```bash
npx playwright test
```
- By default, tests are run in headless mode (see `playwright.config.ts`).
- HTML and list reporters are configured by default.

## Contributing
Contributions are welcome! Please open issues or pull requests for any improvement, new feature, or bug fix. Before submitting, ensure your code passes all tests and follows consistent code style.

## License
This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

**Contact**: For questions or support, open a GitHub issue or contact the maintainer.
