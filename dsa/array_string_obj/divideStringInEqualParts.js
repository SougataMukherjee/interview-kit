/*
Program: Divide a string into K equal parts

Input:
s = "aaabbbccc"
k = 3

Step 1: Calculate length of string
n = s.length = 9

Step 2: Check if division is possible
n % k = 9 % 3 = 0  ✅ (possible)

Step 3: Calculate size of each part
size = n / k = 9 / 3 = 3

Step 4: Initialize result array
res = []

------------------------------------------------
Loop execution (for loop: i = 0; i < n; i += size)
------------------------------------------------

Iteration 1:
i = 0
s.slice(0, 0 + 3) → s.slice(0, 3) → "aaa"
res = ["aaa"]

Iteration 2:
i = 3
s.slice(3, 3 + 3) → s.slice(3, 6) → "bbb"
res = ["aaa", "bbb"]

Iteration 3:
i = 6
s.slice(6, 6 + 3) → s.slice(6, 9) → "ccc"
res = ["aaa", "bbb", "ccc"]

------------------------------------------------

Step 5: Return result
return ["aaa", "bbb", "ccc"]

Output:
["aaa", "bbb", "ccc"]
*/

function divideIntoKParts(s, k) {
  let n = s.length;
  if (n % k !== 0) return "Not possible";
  let size = n / k;
  let res = [];

  for (let i = 0; i < n; i += size) {
    res.push(s.slice(i, i + size));
  }

  return res;
}
console.log(divideIntoKParts('aaabbbccc',3));//[ 'aaa', 'bbb', 'ccc' ]