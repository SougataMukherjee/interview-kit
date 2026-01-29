// Subarray: a subarray is contiguous part of an array
/*
Dry Run Example:
----------------
Input:
arr = [1, 2, 3]

Initial state:
res = []

-----------------------------------
Outer loop i = 0
-----------------------------------

i = 0, j = 0
arr.slice(0, 1) => [1]
res = [[1]]

i = 0, j = 1
arr.slice(0, 2) => [1, 2]
res = [[1], [1, 2]]

i = 0, j = 2
arr.slice(0, 3) => [1, 2, 3]
res = [[1], [1, 2], [1, 2, 3]]

-----------------------------------
Outer loop i = 1
-----------------------------------

i = 1, j = 1
arr.slice(1, 2) => [2]
res = [[1], [1, 2], [1, 2, 3], [2]]

i = 1, j = 2
arr.slice(1, 3) => [2, 3]
res = [[1], [1, 2], [1, 2, 3], [2], [2, 3]]

-----------------------------------
Outer loop i = 2
-----------------------------------

i = 2, j = 2
arr.slice(2, 3) => [3]
res = [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

-----------------------------------
Final Output:
-----------------------------------
[
  [1],
  [1, 2],
  [1, 2, 3],
  [2],
  [2, 3],
  [3]
]

Explanation in one line:
------------------------
i decides the starting index,
j decides the ending index,
slice(i, j+1) creates every possible subarray.
*/

function getSubarray(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      res.push(arr.slice(i, j + 1));
    }
  }
  return res;
}

console.log(getSubarray([1, 2, 3]))// [[1], [1,2], [1,2,3], [2], [2,3], [3]]