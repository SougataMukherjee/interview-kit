function largestDiff(arr) {
  let min = arr[0], max = arr[0];
  for (let i=1;i<arr.length;i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return max - min;
}

console.log(largestDiff([2, 9, 1, 20])); // 19