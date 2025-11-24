function alternatingCharacter(str) {
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) count++;
  }
  return count;
}

console.log(alternatingCharacter("AABAAB")); // 3
