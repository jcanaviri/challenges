// Given an array of integers, create a method that returns the second largest number in the array.

// You should assume that the input array will have at least two elements and all elements will be integers.
// If there are duplicates of the second largest number, the method should return the first occurrence of that number.
// Here's an example of how the method should work:

// int[] array = {1, 2, 3, 4, 5};
// console.log(secondLargest(array)); // Output: 4

// int[] array2 = {-3, -2, -1, 0, 1, 2, 3};
// console.log(secondLargest(array2)); // Output: 2

// int[] array3 = {4,4,4,4,4,4,4,4};
// console.log(secondLargest(array3)); // Output: 4

const secondLargest = (array) => {
  let max = array[0]
  let secondMax = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max
      max = array[i]
    } else if (array[i] > secondMax && array[i] < max) {
      secondMax = array[i]
    }
  }

  return secondMax
}

let array = [1, 2, 3, 4, 5]
console.log(secondLargest(array)) // Output: 4

let array2 = [-3, -2, -1, 0, 1, 2, 3]
console.log(secondLargest(array2)) // Output: 2

let array3 = [4, 4, 4, 4, 4, 4, 4, 4]
console.log(secondLargest(array3)) // Output: 4
