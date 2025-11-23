function compress(s) {
  let out = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    //checks whether the current character is the same as the previous one and keeps increasing the count
    if (s.charAt(i) === s.charAt(i - 1)) {
      count++;
    } else {
      //when the character changes, it outputs the previous character with its count and resets the counter.
      out += s.charAt(i - 1) + count;
      count = 1;
    }
  }
  return out;
}

console.log(compress("aaabba")); // a3b2a1
