//logic: A string is beautiful if every character is different from the one just before it.
function isBeautifulString(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isBeautifulString("abab")); // true
console.log(isBeautifulString("aabb")); // false