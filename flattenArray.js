// Challenge: Flatten a Nested Array

// Write a function flattenArray(nestedArray) that takes in an array of nested arrays of integers as an argument and returns a flattened array. The flattened array should contain all the integers from the nested arrays, in the order they appear.

// For example:

// flattenArray([[1, 2, 3], [4, 5], [6]]) // returns [1, 2, 3, 4, 5, 6]
// flattenArray([[1, 2], [], [3, 4, 5], [6, [7, 8]]]) // returns [1, 2, 3, 4, 5, 6, 7, 8]

// Constraints:
// * The input array may contain nested arrays of arbitrary depth.
// * The input array may contain non-integer elements, which should be ignored.
// * The output array should only contain integer elements.

const flattenArray = (nestedArray) => {
  let result = []

  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      // If the element is an array, call flattenArray recursively on it
      const flattenedSubarray = flattenArray(element)
      // Concatenate the flattened subarray to the result array
      result = result.concat(flattenedSubarray)
    } else if (Number.isInteger(element)) {
      // If the element is an integer, add it to the result array
      result.push(element)
    }
  }

  return result
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6]])) // returns [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2], [], [3, 4, 5], [6, [7, 8]]])) // returns [1, 2, 3, 4, 5, 6, 7, 8]
