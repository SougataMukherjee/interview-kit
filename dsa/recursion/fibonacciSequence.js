function fib(n) {
  if (n <= 1) return n;              // base case
  return fib(n - 1) + fib(n - 2);    // recursive case
}
console.log(fib(5)); // 5
