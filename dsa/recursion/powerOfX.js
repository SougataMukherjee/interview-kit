// power(2,4)
//  → 2 * power(2,3)
//  → 2 * 2 * power(2,2)
//  → 2 * 2 * 2 * power(2,1)
//  → 2 * 2 * 2 * 2 * power(2,0)
//  → 2 * 2 * 2 * 2 * 1

function power(x, n) {
  if (n === 0) return 1;              // base case
  return x * power(x, n - 1);         // recursive case
}
console.log(power(2, 4)); // 16
