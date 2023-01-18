// Given an array of integers, create a function that returns the smallest missing positive integer from the array.

// You should assume that the input array will have at least one element and all elements will be integers.
// * The function should return 1 if no missing positive integers are found in the array.
// * The function should handle negative integers as well.
// Here's an example of how the function should work:
// const array = [3, 4, -1, 1];
// console.log(smallestMissingPositive(array)); // Output: 2

// const array2 = [1, 2, 0];
// console.log(smallestMissingPositive(array2)); // Output: 3

// const array3 = [-3, -2, -1, 0];
// console.log(smallestMissingPositive(array3)); // Output: 1

const smallestMissingPositive = (array) => {
    // step 1: remove negative numbers and 0
    array = array.filter(num => num > 0);

    // step 2: mark the element at index i as negative if array[i] is present in the array
    for (let i = 0; i < array.length; i++) {
        let index = Math.abs(array[i]) - 1;
        if (index < array.length && array[index] > 0) {
            array[index] = -array[index];
        }
    }

    // step 3: find the first index i that has a positive value
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            return i + 1;
        }
    }

    // if no positive index is found, the smallest missing positive is array.length + 1
    return array.length + 1;
}


const array = [3, 4, -1, 1];
console.log(smallestMissingPositive(array)); // Output: 2

const array2 = [1, 2, 0];
console.log(smallestMissingPositive(array2)); // Output: 3

const array3 = [-3, -2, -1, 0];
console.log(smallestMissingPositive(array3)); // Output: 1
