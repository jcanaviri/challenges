// Write a function that takes in two arrays of integers,
// and returns an array containing all of the integers
// that are common to both input arrays.

// For example, if the input arrays were [1, 2, 3, 4] and [3, 4, 5, 6], the function should return [3, 4].

const findCommonElements = (arr1, arr2) => {
  let commonElements = []
  for (item of arr1) {
    if (arr2.includes(item)) {
      commonElements.push(item)
    }
  }

  return commonElements
}

const findCommonElements2 = (arr1, arr2) => {
  const set1 = new Set(arr1)
  const commonElements = new Set(arr2.filter((item) => set1.has(item)))
  return Array.from(commonElements)
}

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

console.log(findCommonElements(arr1, arr2)) // -> [3, 4]
console.log(findCommonElements2(arr1, arr2)) // -> [3, 4]
