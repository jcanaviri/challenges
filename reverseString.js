// Write a function called reverseString that takes a string as input and returns a new string with the characters in reverse order.

// For example:

// reverseString('hello'); // returns 'olleh'
// reverseString('world'); // returns 'dlrow'

const reverseString = (string) => {
  let reversedString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  return reversedString
}

console.log(reverseString('hello')) // returns 'olleh'
console.log(reverseString('world')) // returns 'dlrow'
