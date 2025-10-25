function reverse(arr, i = 0, j = arr.length - 1) {
  if (i >= j) return arr;               // base case
  let temp = arr[i];                    // swap
  arr[i] = arr[j];
  arr[j] = temp;
  return reverse(arr, i + 1, j - 1);    // recursive case
}

let a = [1, 2, 3, 4];
console.log(reverse(a)); // [4,3,2,1]
