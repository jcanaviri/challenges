// Write a function called findMax that takes an array of numbers as input and returns the largest number in the array. If the input array is empty, the function should return 0.

// For example:

// Copy code
// findMax([3, 5, 1, 8, 2]); // returns 8
// findMax([]); // returns 0

const findMax = (array) => {
  if (array.length == 0) return 0

  let max = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }

  return max
}

console.log(findMax([3, 5, 1, 8, 2])) // returns 8
console.log(findMax([])) // returns 0
