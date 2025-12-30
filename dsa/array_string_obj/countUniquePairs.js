function countUniquePairs(arr) {
  const unique = [...new Set(arr)];
  let count = 0;

  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      count++; // each (i, j) is one unique pair
    }
  }
  return count;
}

console.log(countUniquePairs([1,2,2,4,2,5,3,5])); // 10