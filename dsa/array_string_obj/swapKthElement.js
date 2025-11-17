function swapKth(arr, k) {
  let n = arr.length;
  [arr[k - 1], arr[n - k]] = [arr[n - k], arr[k - 1]];
  return arr;
}
console.log(swapKth([1,2,3,4,5],2)) //[ 1, 4, 3, 2, 5 ]