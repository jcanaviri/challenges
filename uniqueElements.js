// Write a function called uniqueElements that takes an array as input
// and returns a new array with all duplicate elements removed.

// For example:
// uniqueElements([1, 2, 2, 3, 4, 4, 5]); // returns [1, 2, 3, 4, 5]
// uniqueElements(['apple', 'banana', 'orange', 'banana']); // returns ['apple', 'banana', 'orange']

const uniqueElements = (array) => {
  // Declare an empty array for the result
  let result = []

  // Go throught all the items verifying if the element is not in the result
  // and pushing it only if there is not present previusly
  for (let item of array) {
    if (!result.includes(item)) {
      result.push(item)
    }
  }

  return result
}

const uniqueElements2 = (array) => {
  // Remove the duplicated elements with Set
  return [...new Set(array)]
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])) // returns [1, 2, 3, 4, 5]
console.log(uniqueElements(['apple', 'banana', 'orange', 'banana'])) // returns ['apple', 'banana', 'orange']

console.log(uniqueElements2([1, 2, 2, 3, 4, 4, 5])) // returns [1, 2, 3, 4, 5]
console.log(uniqueElements2(['apple', 'banana', 'orange', 'banana'])) // returns ['apple', 'banana', 'orange']
