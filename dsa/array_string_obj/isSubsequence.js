/*
Input:
s = "abc"
t = "ahbgdc"

Initial:
i = 0
s[i] = 'a'

Loop through each character of t:

1) ch = 'a'
   s[i] = 'a'
   ch === s[i] → TRUE
   i++ → i = 1

2) ch = 'h'
   s[i] = 'b'
   ch === s[i] → FALSE
   i remains 1

3) ch = 'b'
   s[i] = 'b'
   ch === s[i] → TRUE
   i++ → i = 2

4) ch = 'g'
   s[i] = 'c'
   ch === s[i] → FALSE
   i remains 2

5) ch = 'd'
   s[i] = 'c'
   ch === s[i] → FALSE
   i remains 2

6) ch = 'c'
   s[i] = 'c'
   ch === s[i] → TRUE
   i++ → i = 3

Loop ends.

Final check:
i === s.length
3 === 3 → TRUE

Output:
true
*/
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