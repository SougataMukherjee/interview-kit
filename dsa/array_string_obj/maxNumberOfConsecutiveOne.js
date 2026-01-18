// Given a binary array nums, return the maximum number of consecutive 1’s in the array.
// Input:nums = [1,1,0,1,1,1]
// Output:3
// Explanation The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

function maxConsecutiveOnce(nums) {
  let max = 0, count = 0;

  for (let n of nums) {
    if(n === 1)count=count+1
    else count=0
    max = Math.max(max, count);
  }

  return max;
}


