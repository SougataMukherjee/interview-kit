//rules: 
//1. can not start with ")"
//2. can not end with  "("
//3. same number of  "(" and ")"

/*
Input: "))(("

Index:   0   1   2   3
Chars:   )   )   (   (

STACK (stores index of '('):

Step 1: i=0, ')'
  stack empty → remove ')'
  arr = ["", ")", "(", "("]

Step 2: i=1, ')'
  stack empty → remove ')'
  arr = ["", "", "(", "("]

Step 3: i=2, '('
  push index 2
  stack = [2]

Step 4: i=3, '('
  push index 3
  stack = [2, 3]

After loop:
  stack has unmatched '(' at indices [2,3]
  remove them

Final array: ["", "", "", ""]
Output: ""
*/

/*
Input: "a)b(c)d"

Index:   0   1   2   3   4   5   6
Chars:   a   )   b   (   c   )   d

STACK DIAGRAM:

i=0 'a' → ignore
stack: []

i=1 ')'
stack empty → remove ')'
arr: ["a", "", "b", "(", "c", ")", "d"]

i=3 '('
push index 3
stack: [3]

i=5 ')'
stack not empty → pop '('
stack: []

End loop → stack empty ✔

Final string:
"a" + "" + "b" + "(" + "c" + ")" + "d"
= "ab(c)d"
*/
function minRemoveToMakeValid(s) {
  let stack = [];//hold indices of opening parentheses
  let arr = s.split('');// Convert the string to an array for efficient modification

  for (let i = 0; i < arr.length; i++) {
    // If an opening parenthesis is encountered, push its index onto the stack
    if (arr[i] === '(') stack.push(i);
    else if (arr[i] === ')') {
    // If there's a matching opening parenthesis in the stack, pop it
      if (stack.length) stack.pop();
    //If there's no matching opening parenthesis
      else arr[i] = '';
    }
  }

  for (let i of stack) arr[i] = '';
  return arr.join('');
}
console.log(minRemoveToMakeValid('))(('));//''
console.log(minRemoveToMakeValid('a)b(c)d'));//'ab(c)d'

