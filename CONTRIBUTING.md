# Contributing to JS/TS Interview Playground

## Quick Start

This playground is designed for practicing coding interview questions in JavaScript and TypeScript.

### First Time Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the example tests to verify everything works:
   ```bash
   npm test
   ```

## Workflow for Practicing

### 1. Create a New Coding Challenge

Choose JavaScript or TypeScript based on your preference or the interview requirement.

**For JavaScript:**
```bash
# Create your solution file
touch src/myChallenge.js

# Create your test file
touch tests/myChallenge.test.js
```

**For TypeScript:**
```bash
# Create your solution file
touch src/myChallenge.ts

# Create your test file
touch tests/myChallenge.test.ts
```

### 2. Write Your Tests First (TDD Approach)

Define what you expect your function to do before implementing it:

```javascript
// tests/myChallenge.test.js or tests/myChallenge.test.ts
describe('myFunction', () => {
  test('should handle basic case', () => {
    expect(myFunction(input)).toBe(expectedOutput);
  });
  
  test('should handle edge case', () => {
    expect(myFunction(edgeCase)).toBe(expectedOutput);
  });
});
```

### 3. Implement Your Solution

Write your function to make the tests pass:

```javascript
// src/myChallenge.js
function myFunction(input) {
  // Your implementation here
}

module.exports = { myFunction };
```

Or in TypeScript:

```typescript
// src/myChallenge.ts
export function myFunction(input: InputType): OutputType {
  // Your implementation here
}
```

### 4. Run Tests in Watch Mode

Keep tests running automatically as you code:

```bash
npm run test:watch
```

This will re-run your tests every time you save a file, giving you instant feedback.

### 5. Verify Your Solution

Once all tests pass:

```bash
# Run all tests
npm test

# Check code coverage
npm run test:coverage

# For TypeScript, verify it compiles
npm run build
```

## Common Coding Interview Topics

Here are some common topics to practice. Create files for each:

- **Arrays**: Two-pointer, sliding window, sorting
- **Strings**: Palindromes, anagrams, pattern matching
- **Hash Tables**: Frequency counters, lookups
- **Linked Lists**: Reversal, cycle detection
- **Trees**: Traversals, recursion
- **Dynamic Programming**: Memoization, tabulation
- **Recursion**: Base cases, backtracking
- **Sorting & Searching**: Binary search, merge sort, quick sort

## Example Structure

```
src/
├── arrays/
│   ├── twoSum.ts
│   ├── maxSubarray.ts
│   └── mergeSortedArrays.ts
├── strings/
│   ├── isPalindrome.ts
│   └── longestSubstring.ts
└── trees/
    ├── binaryTreeTraversal.ts
    └── maxDepth.ts

tests/
├── arrays/
│   ├── twoSum.test.ts
│   ├── maxSubarray.test.ts
│   └── mergeSortedArrays.test.ts
├── strings/
│   ├── isPalindrome.test.ts
│   └── longestSubstring.test.ts
└── trees/
    ├── binaryTreeTraversal.test.ts
    └── maxDepth.test.ts
```

## Tips for Interview Success

1. **Start with tests**: Writing tests first helps you understand the problem
2. **Test edge cases**: Empty inputs, single elements, negative numbers, etc.
3. **Use watch mode**: Get instant feedback while coding
4. **Type your code**: Use TypeScript for type safety when practicing
5. **Check coverage**: Ensure all code paths are tested
6. **Time yourself**: Practice under time constraints
7. **Explain as you code**: Practice talking through your solution
8. **Optimize iteratively**: Get it working first, then optimize

## Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run clean` | Remove compiled files |

## Jest Matchers Reference

Common Jest assertions you'll use:

```javascript
expect(value).toBe(expected);           // Exact equality
expect(value).toEqual(expected);        // Deep equality
expect(array).toContain(item);          // Array contains item
expect(value).toBeTruthy();             // Truthy value
expect(value).toBeFalsy();              // Falsy value
expect(value).toBeNull();               // Null value
expect(value).toBeUndefined();          // Undefined value
expect(array).toHaveLength(n);          // Array length
expect(fn).toThrow();                   // Function throws error
expect(number).toBeGreaterThan(n);      // Number comparison
expect(number).toBeLessThan(n);         // Number comparison
```

## TypeScript Types Reference

Common type annotations for coding challenges:

```typescript
// Primitives
string, number, boolean, null, undefined

// Arrays
number[], string[], Array<number>

// Functions
(param: type) => returnType

// Objects
{ key: type, anotherKey: type }

// Union types
string | number | null

// Generic types
Array<T>, Map<K, V>, Set<T>

// Type aliases
type ListNode = { val: number; next: ListNode | null }
```

## Need Help?

- Check the example files in `src/` and `tests/`
- Run the examples to see them working
- Read the main README.md for project overview
- All tests should pass with `npm test`

Happy coding! 🚀
