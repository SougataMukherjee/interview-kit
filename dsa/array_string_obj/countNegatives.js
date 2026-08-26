function countNegatives(arr) {
  if (!Array.isArray(arr)
    || arr.some(x => typeof x !== "number"
      || !Number.isFinite(x)))
    return false;
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count += 1;
    }
  }
  return count
}