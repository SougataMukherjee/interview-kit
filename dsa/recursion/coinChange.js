//count way to make sum
function countWays(coins, n, sum) {
  // base cases
  if (sum === 0) return 1;   // found one way
  if (sum < 0) return 0;     // invalid
  if (n === 0) return 0;     // no coins left

  return countWays(coins, n, sum - coins[n - 1]) +
         countWays(coins, n - 1, sum);
}

console.log(countWays([1,2,3], 3, 4)); // 4
console.log(countWays([1,2,5], 3, 5)); // 4 (5,2+2+1,2+1+1+1,1+1+1+1+1)
console.log(countWays([10], 1, 10)); // 1 (10)