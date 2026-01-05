// find next greater element in an array 
 //look to the right of that number in array and find the first number that’s bigger.If you can’t find any bigger number to the right, just put -1

// Input: arr = [1, 3, 2, 4]
// Output: [3, 4, 4, -1]
// Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.
function nextGreaterElement(arr) {
  let n = arr.length;
  let res = Array(n).fill(-1);
  let stack = []; // store indexes

  for (let i = 0; i < n; i++) {
    //while(stack.size()>0 and current element > value of top index)
    while (stack.length && arr[i] > arr[stack.at(-1)]) {
      let idx = stack.pop();
      res[idx] = arr[i];
    }
    stack.push(i);
  }
  return res;
}
console.log(nextGreaterElement([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]
//for next smaller elements only change if (arr[j] < arr[i])
// base on above concept we can solve 1. Daily Temperature 2. Largest Rectangle