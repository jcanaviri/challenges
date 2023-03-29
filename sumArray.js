// Write a function sumArray that takes an array of numbers as input and returns
// the sum of all the numbers in the array.

// For example:

// sumArray([1, 2, 3, 4, 5]); // returns 15
// sumArray([-5, 10, 4, 8]); // returns 17
const sumArray = (array) => {
  // The first argument to reduce() is a function that takes two arguments:
  // an accumulator (a) and the current element of the array (b).

  // The second argument to reduce() is an initial value for the accumulator.
  // In this case, we set it to 0.
  return array.reduce((a, b) => a + b, 0)
}

console.log(sumArray([1, 2, 3, 4, 5])) // returns 15
console.log(sumArray([-5, 10, 4, 8])) // returns 17
