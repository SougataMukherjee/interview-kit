function sort012(arr){
   let i = 0, mid = 0, j = arr.length - 1;
  while (mid <= j) {
    if (arr[mid] === 0) {
      [arr[i], arr[mid]] = [arr[mid], arr[i]];
      i++; 
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[j]] = [arr[j], arr[mid]];
      j--;
    }
  }
  return arr;
}
console.log(sort012([2, 0, 1, 2, 1, 0]))// [0, 0, 1, 1, 2, 2]