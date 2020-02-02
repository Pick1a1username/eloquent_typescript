const arrayAA = [1, 2, 3]
const arrayBB = [4, 5, 6]
const arrayCC = [7, 8, 9]
const arrayAABBCC = [ arrayAA, arrayBB, arrayCC ]

console.log(arrayAABBCC.reduce((comb, array) => comb.concat(array) ))