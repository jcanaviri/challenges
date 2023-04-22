// Given an array of integers nums and integer target, return the indexes of the two numbers such they add up to the target

const twoSum = (nums, target) => {
  // create a new empty hash map
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // compute the complement of the current element
    const complement = target - nums[i]
    // if the complement is already in the hash map, return its index and the current index
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    // otherwise, add the current element to the hash map with its index
    map.set(nums[i], i)
  }

  // if no pair is found, return an empty array
  return []
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // output: [0, 1]

