# js-ts-interview-playground
A playground to exercise for coding interviews in Javascript and Typescript.

## Features

- ✅ Support for both JavaScript and TypeScript
- ✅ Jest test runner with TypeScript support
- ✅ Example coding tasks with unit tests
- ✅ Node.js runtime environment

## Getting Started

### Installation

```bash
npm install
```

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode (auto-rerun on file changes):
```bash
npm run test:watch
```

Run tests with coverage report:
```bash
npm run test:coverage
```

### Building TypeScript

Compile TypeScript files to JavaScript:
```bash
npm run build
```

Clean build artifacts:
```bash
npm run clean
```

## Project Structure

```
.
├── src/              # Source files (JavaScript and TypeScript)
│   ├── example.js    # Example JavaScript coding task
│   └── example.ts    # Example TypeScript coding task
├── tests/            # Test files
│   ├── example.test.js  # Tests for JavaScript examples
│   └── example.test.ts  # Tests for TypeScript examples
├── dist/             # Compiled TypeScript output (generated)
├── jest.config.js    # Jest configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies and scripts
```

## Creating New Coding Tasks

### For JavaScript:

1. Create a new file in `src/` with `.js` extension
2. Export your functions using `module.exports`
3. Create a corresponding test file in `tests/` with `.test.js` extension
4. Import your functions using `require()`
5. Write your tests using Jest's `describe` and `test` functions

Example:
```javascript
// src/myTask.js
function myFunction(param) {
  // Your implementation
}

module.exports = { myFunction };

// tests/myTask.test.js
const { myFunction } = require('../src/myTask');

describe('myFunction', () => {
  test('should do something', () => {
    expect(myFunction('test')).toBe('expected result');
  });
});
```

### For TypeScript:

1. Create a new file in `src/` with `.ts` extension
2. Export your functions using `export`
3. Create a corresponding test file in `tests/` with `.test.ts` extension
4. Import your functions using `import`
5. Write your tests using Jest's `describe` and `test` functions

Example:
```typescript
// src/myTask.ts
export function myFunction(param: string): string {
  // Your implementation
  return param;
}

// tests/myTask.test.ts
import { myFunction } from '../src/myTask';

describe('myFunction', () => {
  test('should do something', () => {
    expect(myFunction('test')).toBe('expected result');
  });
});
```

## Running Individual Files

You can run TypeScript files directly using `ts-node` (install separately if needed) or compile and run with Node:

```bash
# Compile TypeScript
npm run build

# Run compiled JavaScript
node dist/example.js
```

For JavaScript files:
```bash
node src/example.js
```

## Tips for Interview Practice

1. Start with the example files to understand the setup
2. Create a new file for each coding challenge
3. Write tests first (Test-Driven Development)
4. Run tests frequently to validate your solution
5. Use `npm run test:watch` for instant feedback while coding

## License

ISC


## Sources for code challenges

[Scrimba](https://scrimba.com/frontend-interview-tips-c01u)
