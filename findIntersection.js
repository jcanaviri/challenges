// Write a function findIntersection(arr1, arr2) that takes in two arrays of integers
// as arguments and returns an array containing their intersection. The intersection
// is defined as the set of elements that are present in both arrays.

// For example:

// findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7]) // returns [4, 5]
// findIntersection([1, 2, 3], [4, 5, 6]) // returns []

// Constraints:

// The input arrays may contain duplicates, but the output should not.
// The order of the elements in the output array does not matter.
// Good luck! Let me know if you need any further help.

const findIntersection = (array1, array2) => {
  // Create an empty array result to hold the intersection of the two arrays.
  const result = []

  // Iterate over the first array using a for...of loop and check if each element
  // is present in the second array using the includes() method.
  for (let item of array1) {
    // If the element is present in the second array and not already present in the
    // result array, add it to result.
    if (array2.includes(item) && !result.includes(item)) result.push(item)
  }

  // Return the result array.
  return result
}

const findIntersection2 = (arr1, arr2) => {
  const hashTable = {}
  const result = []

  for (let i = 0; i < arr1.length; i++) {
    hashTable[arr1[i]] = true
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashTable[arr2[i]]) {
      result.push(arr2[i])
      hashTable[arr2[i]] = false
    }
  }

  return result
}

console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7])) // returns [4, 5]
console.log(findIntersection([1, 2, 3], [4, 5, 6])) // returns []
