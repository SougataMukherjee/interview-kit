function isUgly(n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 2 === 0) n=n/2;
  if (n % 3 === 0) n=n/3;
  if (n % 5 === 0) n=n/5;
  
  if(n===1){
      return true;
  }
  return false;
}

console.log(isUgly(6));   // true (2 × 3)
console.log(isUgly(14));  // false (factor 7)