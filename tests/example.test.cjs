// Import from a separate CommonJS file
const exampleModule = import('../src/example.js');

describe('filterEvenNumbers', () => {
  test('should filter even numbers from an array', async () => {
    const { filterEvenNumbers } = await exampleModule;
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('should handle array with no even numbers', async () => {
    const { filterEvenNumbers } = await exampleModule;
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  test('should handle empty array', async () => {
    const { filterEvenNumbers } = await exampleModule;
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test('should handle array with all even numbers', async () => {
    const { filterEvenNumbers } = await exampleModule;
    expect(filterEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });
});

describe('capitalizeWords', () => {
  test('should capitalize first letter of each word', async () => {
    const { capitalizeWords } = await exampleModule;
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('should handle single word', async () => {
    const { capitalizeWords } = await exampleModule;
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('should handle already capitalized words', async () => {
    const { capitalizeWords } = await exampleModule;
    expect(capitalizeWords('Hello World')).toBe('Hello World');
  });

  test('should handle empty string', async () => {
    const { capitalizeWords } = await exampleModule;
    expect(capitalizeWords('')).toBe('');
  });
});
