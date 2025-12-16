function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    max = Math.max(max, h * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
