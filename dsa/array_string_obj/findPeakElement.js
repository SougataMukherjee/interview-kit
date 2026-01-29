/*
  nums = [1, 2, 3, 1]

  i = 0 → 1 > 2 ? false
  i = 1 → 2 > 3 ? false
  i = 2 → 3 > 1 ? true → peak index = 2 (return)
  */
 
function findPeakElement(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // Check current element > next element
    if (nums[i] > nums[i + 1]) {
      return i;   // this is a peak
    }
  }
  return nums.length - 1; // if no drop found, last element is peak
}

console.log(findPeakElement([1,2,3,1]))//2