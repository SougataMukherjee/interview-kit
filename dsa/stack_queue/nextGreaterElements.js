function nextGreaterElement(arr) {
  let n = arr.length;
  let res = Array(n).fill(-1);
  let stack = []; // store indexes

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[i] > arr[stack.at(-1)]) {
      let idx = stack.pop();
      res[idx] = arr[i];
    }
    stack.push(i);
  }
  return res;
}
console.log(nextGreaterElement([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]
//for next smaller elements only change if (arr[j] < arr[i])
// base on above concept we can solve 1. Daily Temperature 2. Largest Rectangle