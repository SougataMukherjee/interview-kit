
/*
Even positions: i = 0, 2, 4, 6

1. Traverse array from i = 0 to n-1
2. Process only EVEN indices
3. For each even index i:
   - if arr[i] < arr[i-1], swap(i, i-1)
   - if arr[i] < arr[i+1], swap(i, i+1)
4. Continue till end

Index:  0  1  2  3  4  5  6
Array:  4  3  7  8  6  2  1
           e     e     e
       i-1 i 
        3  4  7  8  6  2  1
           i i+1      
        3  7  4  8  6  2  1
                   i-1 i
        3  7  4  8  2  6  1
F Arr:  3  7  4  8  2  6  1


*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function zigzag(arr) {
  for (let i = 1; i <= arr.length; i=i+2) {

    if (arr[i] < arr[i - 1]) {
      swap(arr, i, i - 1);
    }

    if (arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
}
console.log(zigzag([3,4,7,8,6,2,1]))//[ 3, 7, 4, 8, 2, 6, 1]