// find next greater element in an array 
 //look to the right of that number in array and find the first number that’s bigger.If you can’t find any bigger number to the right, just put -1

// Input: arr = [1, 3, 2, 4]
// Output: [3, 4, 4, -1]
// Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.
function nextGreater(arr) {
  let n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let next = -1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        next = arr[j];
        break;
      }
    }
    res.push(next);
  }
  return res;
}
console.log(nextGreater([1, 3, 2, 4]))//[ 3, 4, 4, -1 ]
//for next smaller elements only change if (arr[j] < arr[i])
