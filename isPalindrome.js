// Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.

// For example:

// isPalindrome('racecar'); // returns true
// isPalindrome('hello'); // returns false

const isPalindrome = (string) => {
  let reversedString = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  return string === reversedString
}

console.log(isPalindrome('racecar')) // returns true
console.log(isPalindrome('hello')) // returns false
