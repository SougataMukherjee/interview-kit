//A leader in an array is an element that is greater than all the elements to its right, and the last element is always a leader.
/*
Function: isLeader
A leader is an element which is greater than all elements to its right.

Input:
arr = [16, 17, 4, 3, 5, 2]

Initial values:
out = []
max = -Infinity

We traverse from RIGHT to LEFT

-------------------------------------------------
i = 5
arr[5] = 2
2 > -Infinity  → true

out = [2]
max = 2

-------------------------------------------------
i = 4
arr[4] = 5
5 > 2 → true

out = [2, 5]
max = 5

-------------------------------------------------
i = 3
arr[3] = 3
3 > 5 → false

out = [2, 5]
max = 5

-------------------------------------------------
i = 2
arr[2] = 4
4 > 5 → false

out = [2, 5]
max = 5

-------------------------------------------------
i = 1
arr[1] = 17
17 > 5 → true

out = [2, 5, 17]
max = 17

-------------------------------------------------
i = 0
arr[0] = 16
16 > 17 → false

out = [2, 5, 17]
max = 17

-------------------------------------------------
Loop ends

We reverse `out` because leaders were collected from right to left

out.reverse() = [17, 5, 2]

Final Output:
[17, 5, 2]
*/

function isLeader(arr) {
  let out = []; // store leaders here
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) { 
         // this element is a leader → store it
        out.push(arr[i]);
        max = arr[i]; //update max
    }
  }
  return out.reverse();
}

console.log(isLeader([16,17,4,3,5,2])); // [17, 5, 2]