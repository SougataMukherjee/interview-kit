function power(x, n) {
  if (n === 0) return 1;              // base case
  return x * power(x, n - 1);         // recursive case
}
console.log(power(2, 3)); // 8
