//Count occurrences of each character
let arr = [1, 2, 3, 3, 4, 5, 5];
let count = 0,
  item = 4;
for (let i = 0; i < arr.length; i++) {
  if (item === arr[i]) {
    count++;
  }
}
console.log(count);//1

let str = "hello world";
let _count = 0, ch = "l";

for (let c of str) {
  if (c === ch) _count++;
}
console.log(_count); // 3