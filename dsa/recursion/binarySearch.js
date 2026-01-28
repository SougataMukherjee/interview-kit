/*
arr = [1, 3, 5, 7, 9, 11]
target = 7

left=0 right=5
mid=2 → arr[2]=5 < 7 → go right

left=3 right=5
mid=4 → arr[4]=9 > 7 → go left

left=3 right=3
mid=3 → arr[3]=7 FOUND
*/

function binarySearch(arr, target, left, right) {
  if (left > right) return -1; // base case

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7, 0, arr.length - 1)); // 3

