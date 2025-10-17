function kthLargest(arr, N, K) {
  arr.sort((a, b) => a - b);
  return arr[N - K]; // for kth smallest return arr[K - 1];
}
console.log(kthLargest([1,2,9,10,4],5,2))//9