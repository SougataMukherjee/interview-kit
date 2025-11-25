//A leader in an array is an element that is greater than all the elements to its right, and the last element is always a leader.
function isLeader(arr) {
  let out = []; // store leaders here
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) { 
         // this element is a leader → store it
        out.push(arr[i]);
        max = arr[i]; //update max
    }
  }
  return out.reverse();
}

console.log(isLeader([16,17,4,3,5,2])); // [17, 5, 2]