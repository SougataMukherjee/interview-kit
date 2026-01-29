/*
Example Input:
mat = [
  [1, 0, 2],
  [0, 3, 0],
  [4, 5, 0]
]

Initial:
count = 0

Step-by-step execution:

Row 1 → [1, 0, 2]
--------------------------------
x = 1 → not 0 → count = 0
x = 0 → is 0     → count = 1
x = 2 → not 0 → count = 1

Row 2 → [0, 3, 0]
--------------------------------
x = 0 → is 0     → count = 2
x = 3 → not 0 → count = 2
x = 0 → is 0     → count = 3

Row 3 → [4, 5, 0]
--------------------------------
x = 4 → not 0 → count = 3
x = 5 → not 0 → count = 3
x = 0 → is 0     → count = 4

Loop ends.

Final Output:
return count → 4

*/
function countZero(mat) {
  let count = 0;
  for (let row of mat)
    for (let x of row)
      if (x === 0) count++;
  return count;
}