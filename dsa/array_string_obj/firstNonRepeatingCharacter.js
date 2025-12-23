//First non-repeating character

function firstUniqueChar(s="aabbcde") {
  for (let ch of s) {
    if (s.indexOf(ch) === s.lastIndexOf(ch)) {
      return ch;
    }
  }
  return -1;
}
// "c"