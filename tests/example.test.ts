import { reverseString, findMax } from '../src/example';

describe('reverseString', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle single character', () => {
    expect(reverseString('a')).toBe('a');
  });
});

describe('findMax', () => {
  test('should find the maximum number in an array', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test('should handle negative numbers', () => {
    expect(findMax([-1, -5, -3, -9, -2])).toBe(-1);
  });

  test('should handle single element array', () => {
    expect(findMax([42])).toBe(42);
  });

  test('should return null for empty array', () => {
    expect(findMax([])).toBe(null);
  });
});
