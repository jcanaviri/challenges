// Write a function called findMax that takes an array of numbers as input 
// and returns the largest number in the array. 
// If the input array is empty, the function should return 0.

// For example:

// findMax([3, 5, 1, 8, 2]); // returns 8
// findMax([]); // returns 0

const findMax = (array) => {
  // if the array is emtpy return 0
  if (array.length == 0) return 0
  // Declare the first element in the array as the max value
  let max = array[0]

  // Iterate over all the elements in the array from the second 'til the end
  for (let i = 1; i < array.length; i++) {
    // If the current item is bigger than te max, update max
    if (array[i] > max) max = array[i]
  }

  // Return the max value
  return max
}

console.log(findMax([3, 5, 1, 8, 2])) // returns 8
console.log(findMax([])) // returns 0
