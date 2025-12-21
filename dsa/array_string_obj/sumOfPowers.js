////x^1+x^2+x^3+⋯+x^N
function powerSum(x, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  return sum;
}