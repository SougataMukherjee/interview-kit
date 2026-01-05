// Subarray: a subarray is contiguous part of an array
function getSubarray(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      res.push(arr.slice(i, j + 1));
    }
  }
  return res;
}

console.log(getSubarray([1, 2, 3]))// [[1], [1,2], [1,2,3], [2], [2,3], [3]]