// Mausque is a famous children's school, its students stand out for having created a game that is a classic during recess.
// During the game, a round of N children is formed, each represented by a number, one of them takes the ball and passes it exchanging P children. The cycle repeats S times, always starting from number 1.
// For example, for seven children we have N = 7, P = 1 and S = 4, resulting in 2
// Write a program that implements this solution.

const mausque = (n, p, s) => {
  // n the children
  // p the passes
  // s the cicles
  let current = 1

  for (let i = 0; i < s; i++) {
    for (let j = 0; j < p; j++) {
      current = current < n ? current + 1 : 1
      //   console.log('current', current)
    }

    current = current < n ? current + 1 : 1
    // console.log('> current', current)
  }

  return current
}

console.log(mausque(7, 1, 4)) // 2
console.log(mausque(12, 3, 4)) // 5
console.log(mausque(7, 2, 3)) // 3
