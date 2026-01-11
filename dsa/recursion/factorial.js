// fact(5)
// → 5 * fact(4)
// → 5 * 4 * fact(3)
// → 5 * 4 * 3 * fact(2)
// → 5 * 4 * 3 * 2 * fact(1)
// → 5 * 4 * 3 * 2 * 1

function fact(n) {
  if (n === 0 || n === 1) return 1;          // base case
  return n * fact(n - 1);         // recursive case
}
console.log(fact(5)); // 120
