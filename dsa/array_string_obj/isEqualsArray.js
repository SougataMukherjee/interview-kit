function isEqual(a, b) {
  return JSON.stringify(a)===JSON.stringify(b)
}
console.log(isEqual([1,2,3],[1,2,3]))//true
console.log(isEqual([1,2,3],[1,3,2]))//false