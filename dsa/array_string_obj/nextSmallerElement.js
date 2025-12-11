function nextSmaller(arr) {
  let n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let next = -1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        next = arr[j];
        break;
      }
    }
    res.push(next);
  }
  return res;
}

console.log(nextSmaller([4, 8, 5, 2, 25])); //[2,5,2,-1,-1]