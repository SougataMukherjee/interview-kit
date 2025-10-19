function productExceptSelf(arr) {
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) prod *= arr[j];
    }
    result[i] = prod;
  }
  return result;
}
console.log(productExceptSelf([2,3,4,5]))