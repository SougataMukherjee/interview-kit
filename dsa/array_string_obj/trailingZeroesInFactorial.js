function trailingZeroesInFactorial(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}
console.log(trailingZeroesInFactorial(5))//1
console.log(trailingZeroesInFactorial(10))//2