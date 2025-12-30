//A happy number is a number that eventually becomes 1 when replaced repeatedly by the sum of the squares of its digits
//19 → 1² + 9² = 82
//82 → 8² + 2² = 68
//68 → 6² + 8² = 100
//100 → 1² + 0² + 0² = 1 ✅

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