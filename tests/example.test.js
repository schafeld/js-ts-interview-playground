const { filterEvenNumbers, capitalizeWords } = require('../src/example.js');

describe('filterEvenNumbers', () => {
  test('should filter even numbers from an array', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('should handle array with no even numbers', () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test('should handle array with all even numbers', () => {
    expect(filterEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });
});

describe('capitalizeWords', () => {
  test('should capitalize first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('should handle single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('should handle already capitalized words', () => {
    expect(capitalizeWords('Hello World')).toBe('Hello World');
  });

  test('should handle empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });
});
