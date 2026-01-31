# IT3040 Assignment 01 - SwiftTranslator Automation Suite

This project contains a comprehensive automated test suite for the [SwiftTranslator](https://www.swifttranslator.com/) web application. The automation script is developed using **Playwright** with JavaScript and follows a Data-Driven Testing approach.
 Assignment 01 (Test Automation)

---

##  Prerequisites

To run this project, ensure your environment is set up with:

1.  **Node.js** (v14 or higher)
2.  **Visual Studio Code** (Recommended)
3.  **Git** (Version Control)

---

##  Installation & Setup

1.  **Unzip** the submission folder.
2.  Open the folder in **Visual Studio Code** (or open a terminal in the folder).
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```
4.  Install Playwright browsers:
    ```bash
    npx playwright install
    ```

---

##  Execution Commands

You can run the tests using the following commands:

### 1. Run All Tests (Headless Mode)
Executes all 36 test cases in the background.
```bash
npx playwright test
