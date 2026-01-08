// -1,3,4,-2

// subarray| sum
// -1      | -1
// -1 3    |  2
// -1 3 4  |  6
// 3       |  3 
// 3 4     |  7(max)
// 3 4 -2  |  5
// 4       |  4 
// 4 -2    |  2
// -2      |  2

let arr = [-1, 3, 4, -2];
let maxSum = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];
    maxSum = Math.max(maxSum, sum);
  }
}
console.log(maxSum)// 7