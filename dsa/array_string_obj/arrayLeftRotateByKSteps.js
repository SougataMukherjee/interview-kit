//left rotate array by k steps let k=2 so [1,2,3,4,5]->[2,3,4,5,1]->[3,4,5,1,2]
// k=0  12345  0%5=0
// k=1  23451  1%5=1
// k=2  34512  2%5=2
// k=3  45123  3%5=3
// k=4  51234  4%5=4
// k=5  12345  5%5=0
// k=6  23451  6%5=1  same as K=1
// k=7  34512  7%5=2  same as k=2
/*
Circular Shift (Left Rotate):

   ┌─   ┌─   ┌─
   ▼  | ▼  | ▼  |                
+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+
                  ▲
   └──────── moves to last
*/

function rotateByK(arr, k) {
  let n = arr.length;
  k = k % n;
  for (let r = 1; r <= k; r++) {
    let temp = arr[0];
    for (let i = 1; i < n; i++) {
      arr[i - 1] = arr[i];
    }
    arr[n - 1] = temp;
  }
  return arr;
}
console.log(rotateByK([1,2,3,4,5], 2));// [3,4,5,1,2]

