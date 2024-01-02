// Write a program that tells if a number is capicua or not, a number is capicua when
// the number is equals to its reverse for example:
//   121 == 121    true
//   123 != 321    false

const isCapicua = (number) => {
  let reversed = 0,
    original = number

  while (original > 0) {
    reversed = reversed * 10 + (original % 10)
    original = parseInt(original / 10)
  }

  return number === reversed
}

console.log(isCapicua(121)) // true
console.log(isCapicua(555)) // true
console.log(isCapicua(124)) // false
console.log(isCapicua(45341)) // false
