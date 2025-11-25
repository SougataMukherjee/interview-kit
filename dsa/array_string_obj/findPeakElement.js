function findPeakElement(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;   // this is a peak
    }
  }
  return nums.length - 1; // if no drop found, last element is peak
}

console.log(findPeakElement([1,2,3,1]))//2