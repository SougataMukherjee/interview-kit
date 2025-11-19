function sumZero(arr) {
  for (let i=0;i<arr.length;i++) {
    for (let j=i+1;j<arr.length;j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return null;
}

console.log(sumZero([5, 3, 2, -3])); // [3, -3]