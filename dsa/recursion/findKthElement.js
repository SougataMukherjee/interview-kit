function findKth(arr, k, index = 0) {
  if (index === arr.length) return null;
  if (index === k - 1) return arr[index];

  return findKth(arr, k, index + 1);
}
console.log(findKth([10,20,30,40], 3)); // 30
