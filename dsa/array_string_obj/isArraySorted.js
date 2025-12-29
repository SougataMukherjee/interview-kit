function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log(isSorted([1,2,3,4]))//true

// Given a string of colors, find the minimum number of characters to remove so that no two adjacent characters are the same.

function minRemovals(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
  }
  return count;
}

console.log(minRemovals("RRGGBB")); // 3
