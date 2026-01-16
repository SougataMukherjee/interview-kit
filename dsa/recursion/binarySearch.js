function binarySearch(arr, tar, st, end) {
  if (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);

    if (arr[mid] === tar) return mid;
    else if (arr[mid] < tar) {
      return binarySearch(arr, tar, mid + 1, end);
    } else {
      return binarySearch(arr, tar, st, mid - 1);
    }
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
let target = 7;

console.log(binarySearch(arr, target, 0, arr.length - 1));
