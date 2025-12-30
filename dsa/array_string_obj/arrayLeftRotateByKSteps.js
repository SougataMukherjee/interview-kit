//left rotate array by k steps let k=2 so [1,2,3,4,5]->[2,3,4,5,1]->[3,4,5,1,2]
function leftRotate(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(leftRotate([1,2,3,4,5], 2));// [3,4,5,1,2]

//for right rotate return arr.slice(-k).concat(arr.slice(0, -k))

