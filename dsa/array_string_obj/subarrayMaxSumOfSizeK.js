function maxSum(arr, k) {
  let sum = 0;
  let maxSum = 0;
  let n = arr.length;
  // first window
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  maxSum = sum;
  // slide the window
  for (let i = k; i < n; i++) {
    sum = sum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
console.log(maxSum([100, 200, 300, 400],2)) //700