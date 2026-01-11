// find(arr, 3, index=0)
//  └── find(arr, 3, index=1)
//       └── find(arr, 3, index=2)
//            └── find(arr, 3, index=3)  ← Base Case

function findKth(arr, k, index = 0) {
  if (index === arr.length) return null;
  if (index === k - 1) return arr[index];

  return findKth(arr, k, index + 1);
}
console.log(findKth([10,20,30,40], 3)); // 30
