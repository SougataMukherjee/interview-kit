function climb(n) {
  if (n <= 2) return n;                  // base case
  return climb(n - 1) + climb(n - 2);    // recursive case
}
console.log(climb(4)); // 5
