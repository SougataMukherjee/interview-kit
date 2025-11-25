//find square root of a number
function squareRoot(num) {
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    if (i * i <= num) ans = i;
    else break;
  }
  return ans;
}

console.log(squareRoot(25)); // 5
console.log(squareRoot(30)); // 5.5 means 5