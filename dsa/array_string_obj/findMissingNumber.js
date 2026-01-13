const arr = [0, 1, 2, 3, 5];
let count = 0;
for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
  if (arr[count] === i) {
    count++;
  } else {
    console.log(i);
  }
}

//way 2
const arr1 = [0, 1, 2, 3, 5];
const n=arr1.length;
let expectedSum= n*(n+1)/2
let currentSum=0
for (let i=0;i<n; i++) {
  currentSum+=arr1[i]
}
console.log(expectedSum-currentSum);// 4