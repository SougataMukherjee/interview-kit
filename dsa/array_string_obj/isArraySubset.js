function isBSubsetOfA(a, b) {
  const set = new Set(a);
  return b.every(x => set.has(x));
}
console.log(isBSubsetOfA([1, 2, 3, 4, 4, 5, 6], [1, 2, 4]))//true