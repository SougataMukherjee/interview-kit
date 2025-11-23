function productExceptSelf(arr) {
  const product = arr.reduce((a, b) => a * b);
  return arr.map(x => product / x);
}

console.log(productExceptSelf([2,3,4,5])); // [60,40,30,24]