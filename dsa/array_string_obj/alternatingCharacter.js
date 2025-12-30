function alternatingCharacter(str) {
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) count++;
  }
  return count;
}

console.log(alternatingCharacter("AABAAB")); // 2
console.log(alternatingCharacter("ABABAB")); // 0

// Given a string of colors, find the minimum number of characters to remove so that no two adjacent characters are the same.

function minRemovals(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
  }
  return count;
}

console.log(minRemovals("RRGGBB")); // 3
