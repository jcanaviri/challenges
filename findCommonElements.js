// Write a function that takes in two arrays of integers,
// and returns an array containing all of the integers that are common to both input arrays.

// For example:
// Input: [1, 2, 3, 4] and [3, 4, 5, 6].
// Output: [3, 4].

const findCommonElements = (arr1, arr2) => {
  // Declare an empty array with the name 'result'
  let result = []

  // Iterate over all the elements in the arr1
  for (let i = 0; i < arr1.length; i++) {
    // if the current item in arr1 is present in the another arr2
    // push a new value in the result list.
    if (arr2.includes(arr1[i])) result.push(arr1[i])
  }

  // Return the final result with the common elements
  return result
}

const findCommonElements2 = (arr1, arr2) => {
  // Conver the arr1 into a set to remove the duplicated elements.
  const set1 = new Set(arr1)
  // Create another set but filtering the elements present in both arrays
  const result = new Set(arr2.filter((item) => set1.has(item)))
  // Return the result in a form of a array
  return Array.from(result)
}

// Test the function
let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

console.log(findCommonElements(arr1, arr2)) // -> [3, 4]
console.log(findCommonElements2(arr1, arr2)) // -> [3, 4]
