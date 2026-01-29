// [x1,y1,x2,y2,...xn,yn]
// input: arr=[2,5,1,3,4,7] output:[2,3,5,4,1,7]
/*
Dry Run Example:

Input:
let arr = [2, 5, 1, 3, 4, 7];
n = arr.length / 2 = 6 / 2 = 3
res = []

Loop iteration details:

i = 0:
  res.push(arr[0]) -> res.push(2) -> res = [2]
  res.push(arr[0 + 3]) -> res.push(3) -> res = [2, 3]

i = 1:
  res.push(arr[1]) -> res.push(5) -> res = [2, 3, 5]
  res.push(arr[1 + 3]) -> res.push(4) -> res = [2, 3, 5, 4]

i = 2:
  res.push(arr[2]) -> res.push(1) -> res = [2, 3, 5, 4, 1]
  res.push(arr[2 + 3]) -> res.push(7) -> res = [2, 3, 5, 4, 1, 7]

Final Output:
console.log(res) -> [2, 3, 5, 4, 1, 7]


*/
let arr = [2, 5, 1, 3, 4, 7];
const n = arr.length / 2;
const res = [];
for (let i = 0; i < n; i++) {
  res.push(arr[i]);
  res.push(arr[i + n]);
}
console.log(res);