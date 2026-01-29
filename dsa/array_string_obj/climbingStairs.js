/*
Problem:
You can climb 1 or 2 steps at a time.
Find how many distinct ways you can climb to the top.

Example:
n = 3

Possible ways:
1 + 1 + 1
1 + 2
2 + 1

Answer = 3
*/

/*
DRY RUN FOR n = 3
---------------------------------

Initial check:
n === 1 or n === 0 ? ❌
So move forward.

Step 1: Initialize variables
first  = 1   // ways to reach step 1
second = 2   // ways to reach step 2

Loop starts from i = 3 to n

---------------------------------
Iteration 1:
i = 3

third = first + second
third = 1 + 2 = 3

Update values:
first  = second  -> first = 2
second = third   -> second = 3

---------------------------------
Loop ends (i > n)

Return second = 3
*/

/*
FINAL OUTPUT:
climbingStairs(3) -> 3
*/

let climbingStairs = (n) => {
  if (n === 1 || n === 0) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
console.log(climbingStairs(2)); //steps[1+1,2]=2 way
console.log(climbingStairs(3)); //steps[1+1+1,1+2,2+1]=3 way

//minimum steps to reach x using steps of size 1-5 units so return Math.ceil(x / 5);