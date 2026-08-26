function isPowerOfFour(n) {
  if (n <= 1) return n === 1;

  return n % 4 === 0 && isPowerOfFour(n / 4);
}
isPowerOfFour(1)//4^0=1