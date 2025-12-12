function isValidTriangle(a, b, c) {
  // check angle-based triangle
  if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
    return true;
  }

  // check side-based triangle
  return a + b > c && a + c > b && b + c > a;
}

console.log(isValidTriangle(90, 60, 30)); // true
console.log(isValidTriangle(3, 4, 5));    // true
console.log(isValidTriangle(1, 2, 3));    // false