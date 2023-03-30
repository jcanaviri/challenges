// Write a function that takes in an array of integers and returns an array
// containing the second largest and second smallest integers from the input array, in that order.

// For example, if the input array was [1, 5, 2, 4, 3], the function should return [2, 4].

const findSecondLargestAndSmallest = (arr) => {
  let smallest = Infinity
  let secondSmallest = Infinity
  let largest = -Infinity
  let secondLargest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest
      smallest = arr[i]
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i]
    }

    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }

  return [secondSmallest, secondLargest]
}

let arr = [1, 5, 2, 4, 3]

console.log(findSecondLargestAndSmallest(arr))
