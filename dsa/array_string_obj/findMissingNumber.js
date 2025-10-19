const arr = [0, 1, 2, 3, 5];
let count = 0;
for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
  if (arr[count] === i) {
    count++;
  } else {
    console.log(i);
  }
}