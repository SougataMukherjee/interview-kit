//count number of digits
function countDigit(n) {
  let count = 0,
    temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    if (digit !== 0 ) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }

  return count;
}
console.log(countDigit(2343))