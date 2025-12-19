function isSubsequence(s, t) {
  let i = 0;
  for (let ch of t){
      if (ch === s[i]){
          i++;
      }
  }
  return i === s.length;
}
console.log(isSubsequence("abc","ahbgdc"))//true