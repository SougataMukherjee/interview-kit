/*
Dry Run:

Input:
let arr = [1, 3, 5, 4, 8];
let newArr = [];

Step 1: Find middle index
let mid = Math.floor(arr.length / 2); 
arr.length = 5
mid = Math.floor(5 / 2) = 2

Step 2: Reverse first half (indices 0 to mid-1)
for (let i = mid - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

Iteration 1: i = 1
  newArr.push(arr[1]) → newArr.push(3)
  newArr = [3]

Iteration 2: i = 0
  newArr.push(arr[0]) → newArr.push(1)
  newArr = [3, 1]

Step 3: Keep second half same (indices mid to end)
for (let i = mid; i < arr.length; i++) {
  newArr.push(arr[i]);
}

Iteration 1: i = 2
  newArr.push(arr[2]) → newArr.push(5)
  newArr = [3, 1, 5]

Iteration 2: i = 3
  newArr.push(arr[3]) → newArr.push(4)
  newArr = [3, 1, 5, 4]

Iteration 3: i = 4
  newArr.push(arr[4]) → newArr.push(8)
  newArr = [3, 1, 5, 4, 8]

Final Output:
console.log(newArr) → [3, 1, 5, 4, 8]

Explanation:
- The first half [1,3] is reversed → [3,1]
- The second half [5,4,8] is kept as-is → [5,4,8]
- Combine them → [3,1,5,4,8]
*/
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