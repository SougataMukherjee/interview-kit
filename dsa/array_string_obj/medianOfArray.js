function median(arr) {
  arr.sort((a, b) => a - b);

  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    return arr[mid];
  } else {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
}

console.log(median([3,1,2]));      // 2
console.log(median([1,2,3,4]));    // 2.5
