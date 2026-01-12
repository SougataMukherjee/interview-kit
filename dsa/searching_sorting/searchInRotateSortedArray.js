function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    // left part sorted
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    // right part sorted
    else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4,5,7,-1,0,1,2], 4)); // 0
