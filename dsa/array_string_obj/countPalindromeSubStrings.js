/*
Substrings:
a   ✓
a   ✓
a   ✓
aa  ✓
aa  ✓
aaa ✓
Total = 6
*/

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

function countPalSubstrings(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPalSubstrings("aaa")); // 6


