# Playwright Framework

## Tech Stack:
- Playwright for browser automation
- TypeScript for strong typing
- Cucumber.js for BDD
- Page Object Model (POM) for clean, reusable test code

## Project Structure:
```
REPOS/
│
├── data/                          
│   ├── testData.json  
│ 
│──playwright-report/                          
│   ├── index.html/  
│ 
│──test-results/                          
│   ├── .last-run.json/  
│
├── tests/                          
│   ├── features/                   
│   │   └── login.feature
│   ├── step-definitions/                      
│     └── login.steps.ts
|   ├── hooks/
|       └── testHooks.ts
|   ├── pages/
|       └── LoginPage.ts   
|
|─ cucumber.js
|─ .env
|── tsconfig.json
├── package-lock.json
├── package.json
├── README.md 

## Getting Started

1.Create a file .env in the root folder and copy the contents from .env.example

2. Install dependencies:
```bash
npm install
```

3. Run Playwright tests:
```bash
npm run test
```

4. Run Playwright tests:
```bash
npm run report
```

5. Run BDD tests:
```bash
npm run test-cucumber
```