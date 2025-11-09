function findNLargest(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

console.log(findNLargest([5, 1, 9, 3, 7, 6], 3)); // [9, 7, 6]
