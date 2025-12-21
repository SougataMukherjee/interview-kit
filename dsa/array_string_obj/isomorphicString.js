function isIsomorphic(s, t) {
  for (let i = 0; i < s.length; i++)
    if (s.indexOf(s[i]) !== t.indexOf(t[i])){
        return false;
    }
  return true;
}
console.log(isIsomorphic("aab","xxy")) //true
console.log(isIsomorphic("egg","add")) //true