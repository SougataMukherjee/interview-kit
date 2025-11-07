function majority(arr) {
  arr.sort((a,b) => a-b);
  return arr[Math.floor(arr.length / 2)];
}

console.log(majority([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6