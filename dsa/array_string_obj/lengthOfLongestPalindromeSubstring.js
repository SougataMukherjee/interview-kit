/*
Input: "aaa"

i=0, j=0 → "a"   → maxLen=1
i=0, j=1 → "aa"  → maxLen=2
i=0, j=2 → "aaa" → maxLen=3 ✔

i=1, j=1 → "a"
i=1, j=2 → "aa"

i=2, j=2 → "a"

Result = substring(0, 3) = "aaa"
*/

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

function longestPalSubstring(s) {
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        let len = j - i + 1;

        if (len > maxLen) {
          maxLen = len;
          start = i;
        }
      }
    }
  }

  return s.substring(start, start + maxLen);
}

console.log(longestPalSubstring("aaa")); // "aaa"
