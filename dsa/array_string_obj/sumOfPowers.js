//x^1+x^2+x^3+⋯+x^N
function powerSum(x, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  return sum;
}

//x^1−x^2+x^3−x^4+⋯+(−1)^n+1 x^n

function powerSum(x, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // if i is odd → + , if even → -
    sum += (i % 2 === 1 ? 1 : -1) * Math.pow(x, i);
  }
  return sum;
}

console.log(powerSum(2, 3)); // 2 - 4 + 8 = 6
console.log(powerSum(3, 4)); // 3 - 9 + 27 - 81 = -60
