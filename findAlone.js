const findAlone = (str) => {
  const myMap = new Map()
  let position = 1
  let alone = 0

  for (let char of str) {
    // If the character is already in the map, mark its occurrence as -1
    if (myMap.has(char)) {
      myMap.set(char, -1)
    } else {
      // If the character is not in the map, set its position
      myMap.set(char, position)
      alone = position
    }

    position++
  }

  // Iterate through the map to find the first non-repeated character
  for (let [char, pos] of myMap) {
    if (pos !== -1) {
      return pos
    }
  }

  return alone
}

console.log(findAlone('AaAA')) // Output: 2
console.log(findAlone('bbxaa')) // Output: 3
console.log(findAlone('XBBbBX')) // Output: 4
