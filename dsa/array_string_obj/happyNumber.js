//A happy number is a number that eventually becomes 1 when replaced repeatedly by the sum of the squares of its digits
//19 → 1² + 9² = 82
//82 → 8² + 2² = 68
//68 → 6² + 8² = 100
//100 → 1² + 0² + 0² = 1 ✅

function isHappy(n) {
  let seen = new Set();

  while (n !== 1) {
    //if ans are store previously so prevent from infinite loop
    if (seen.has(n)) return false;
    seen.add(n);

    let sum = 0;

    // Extract digits and square them
    while (n > 0) {
      let r = n % 10;        // get last digit
      sum += r * r;         // square and add
      n = Math.floor(n / 10); // remove last digit
    }

    n = sum; // move to next number
  }

  return true;
}

console.log(isHappy(19)); // true
console.log(isHappy(4)); // false