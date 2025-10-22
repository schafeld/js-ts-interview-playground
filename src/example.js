/**
 * Example JavaScript coding task: Array operations
 * 
 * Write a function that filters even numbers from an array.
 */

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

/**
 * Example: String manipulation
 * 
 * Write a function that capitalizes the first letter of each word.
 */

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = {
  filterEvenNumbers,
  capitalizeWords
};
