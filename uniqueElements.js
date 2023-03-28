// Write a function called uniqueElements that takes an array as input and returns a new array with all duplicate elements removed.

// For example:

// uniqueElements([1, 2, 2, 3, 4, 4, 5]); // returns [1, 2, 3, 4, 5]
// uniqueElements(['apple', 'banana', 'orange', 'banana']); // returns ['apple', 'banana', 'orange']

const uniqueElements = (array) => {
  let withoutDuplicates = []

  for (let item of array) {
    if (!withoutDuplicates.includes(item)) {
      withoutDuplicates.push(item)
    }
  }

  return withoutDuplicates
}

const uniqueElements2 = (array) => {
  const unique = [...new Set(array)]
  return unique
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])) // returns [1, 2, 3, 4, 5]
console.log(uniqueElements(['apple', 'banana', 'orange', 'banana'])) // returns ['apple', 'banana', 'orange']

console.log(uniqueElements2([1, 2, 2, 3, 4, 4, 5])) // returns [1, 2, 3, 4, 5]
console.log(uniqueElements2(['apple', 'banana', 'orange', 'banana'])) // returns ['apple', 'banana', 'orange']
