function isLeader(arr) {
  let out = []; // store leaders here
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
      // check if current element is greater than everything seen so far
    if (arr[i] > max) { 
         // this element is a leader → store it
        out.push(arr[i]);
        max = arr[i]; //update max
    }
  }
  return out.reverse();
}

console.log(isLeader([16,17,4,3,5,2])); // [17, 5, 2]