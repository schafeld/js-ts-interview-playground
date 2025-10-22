/**
 * Example TypeScript coding task: String manipulation
 * 
 * Write a function that reverses a string.
 */

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Example: Array manipulation
 * 
 * Write a function that finds the maximum number in an array.
 */

export function findMax(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null;
  }
  return Math.max(...numbers);
}
