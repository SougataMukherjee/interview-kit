//logic:
// Indices: i, i+1, i+2, ..., i+(m-1)
// number of students = m

// First packet index = i
// Last packet index = i + (m - 1)

function minDiff(arr, m) {
  arr.sort((a,b)=>a-b);
  let min = Infinity;

  for (let i = 0; i + m - 1 < arr.length; i++) {
    min = Math.min(min, arr[i + m - 1] - arr[i]);
  }
  return min;
}

console.log(minDiff([3,4,1,9,56,7,9,12],5))//in window [3,4,7,9,9]->last index-first index=9-3=6