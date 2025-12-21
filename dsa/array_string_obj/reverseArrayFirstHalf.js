let arr = [1, 3, 5, 4, 8], newArr = [];
let mid = Math.floor(arr.length / 2);

// reverse first half
for (let i = mid - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
// keep second half same
for (let i = mid; i < arr.length; i++) {
  newArr.push(arr[i]);
}

console.log(newArr);