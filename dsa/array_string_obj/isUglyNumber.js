//An Ugly Number is a positive number whose only prime factors are 2,3 and 5
function isUgly(n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  //keep dividing n by 2,3 and 5
  if (n % 2 === 0) n=n/2; // for 6 n = 6 / 2 = 3
  if (n % 3 === 0) n=n/3; // for 6 n = 3 / 3 = 1
  if (n % 5 === 0) n=n/5; // for 6 no division
  
  if(n===1){
      return true;
  }
  return false;
}

console.log(isUgly(6));   // true (2 × 3)
console.log(isUgly(14));  // false (factor 7)