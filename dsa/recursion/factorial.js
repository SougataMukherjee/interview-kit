function fact(n) {
  if (n === 0 || n === 1) return 1;          // base case
  return n * fact(n - 1);         // recursive case
}
console.log(fact(5)); // 120
