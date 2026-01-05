function maxArea(height) {
  // Left and Right pointer starting at beginning and End
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  // Left pointer starting at beginning
  while (left < right) {
    // Continue until pointers meet
    let width = right - left;
    // Width is distance between pointers
    let h = Math.min(height[left], height[right]);
    max = Math.max(max, h * width);
    //if left < right skip the left not able to handle max water else skip the right
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
