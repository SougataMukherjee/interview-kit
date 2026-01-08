// sum of all subarray of given length size k
// [-1, 3]  → 2
// [3, 4]   → 7
// [4, -2]  → 2

let arr = [-1, 3, 4, -2];
let k = 2;

for (let i = 0; i <= arr.length - k; i++) {
  let sum = 0;

  for (let j = i; j < i + k; j++) {
    sum = sum + arr[j];
  }

  console.log(sum);// 2  7  2
}