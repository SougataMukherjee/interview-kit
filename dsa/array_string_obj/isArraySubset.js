function isSubset(a, b) {
  return a.every(item => b.includes(item))
}
console.log(isSubset([1, 2], [1, 2, 4]))//true