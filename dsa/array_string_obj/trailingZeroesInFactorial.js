/*
Function: trailingZeroesInFactorial(n)
Purpose: Counts the number of trailing zeroes in n! (factorial of n)
Logic: 
  - Trailing zeros come from factors of 10 in the factorial.
  - Each 10 = 2 * 5, and there are always more 2s than 5s.
  - So, count the number of 5s in the factors of n! 

Example: n = 10
  10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
  Factorizing numbers:
    - 5 contributes one 5
    - 10 contributes one 5
  Total 5s = 2
  So, trailing zeros = 2

Dry Run:
  Input: n = 10
  Initialize: count = 0
  Loop: i = 5; i <= 10; i *= 5
    1st iteration: i = 5
      count += Math.floor(10 / 5) = 0 + 2 = 2
      i *= 5 => i = 25
    2nd iteration: i = 25
      25 > 10 => exit loop
  Return count = 2

Output: 2
*/

function trailingZeroesInFactorial(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

console.log(trailingZeroesInFactorial(10)) // Output: 2
console.log(trailingZeroesInFactorial(5)) // Output: 1