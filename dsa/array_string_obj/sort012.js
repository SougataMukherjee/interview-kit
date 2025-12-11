//this question might come like sort 3 colors red,blue,green without any sort algo
function sort012(arr){
  let i = 0, mid = 0, j = arr.length - 1;
  while (mid <= j) {
    // If current element is 0 move it to the LEFT side by swap
    if (arr[mid] === 0) {
      [arr[i], arr[mid]] = [arr[mid], arr[i]];
      i++; 
      mid++;
    }else if (arr[mid] === 1) { //If current element is 1 don't do any operation only move mid pointer one step ahead 
      mid++;
    } else // else current element 2 move to the RIGHT side by swap
      {
      [arr[mid], arr[j]] = [arr[j], arr[mid]];
      j--;
    }
  }
  return arr;
}
console.log(sort012([2, 0, 1, 2, 1, 0]))// [0, 0, 1, 1, 2, 2]