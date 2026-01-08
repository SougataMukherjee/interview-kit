// [ -1, 3, 4, 2 ]
// i   j    i+size
// 0  0 1   0+2
// 1  1 2   1+2
// 2  2 3   2+2
// 3  3 4   3+2

let arr = [-1, 3, 4, -2];
let k = 2;
for (let i = 0; i <= arr.length - k; i++) {
  let sub = [];
  for (let j = i; j < i + k; j++) {
    sub.push(arr[j]);
  }
  console.log(sub);//[ -1, 3 ][ 3, 4 ][ 4, -2 ]
}
