function isHappy(n) {
  let seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);

    n = n.toString()
         .split('')
         .reduce((sum, d) => sum + d * d, 0);
  }

  return true;
}

isHappy(19); // true