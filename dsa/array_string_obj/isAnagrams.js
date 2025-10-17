//Check if two strings are anagrams
function isAnagrams(s1, s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
let a="listen", b="silent";
console.log(isAnagrams(a,b))
