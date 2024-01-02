// Write a program that returns the n-th number of the serie of tribonacci
// the series starts with f_0 = 0, f_1 = 0 and f_2 = 1
// so the n-th term is: f(n) = f(n-1) + f(n-2) + f(n-3)

const tribonacci = (number) => {
  if (number === 0 || number === 1) return 0
  if (number === 2) return 1

  return (
    tribonacci(number - 1) + tribonacci(number - 2) + tribonacci(number - 3)
  )
}

console.log(tribonacci(10)) // 81
console.log(tribonacci(0)) // 0
console.log(tribonacci(3)) // 1
