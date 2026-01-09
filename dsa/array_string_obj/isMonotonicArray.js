function isNonDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isNonDecreasing([1,2,2,3])); // true
console.log(isNonDecreasing([1,3,2]));   // false