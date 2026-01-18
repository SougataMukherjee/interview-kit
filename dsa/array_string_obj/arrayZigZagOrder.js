// Inp: [4,3,7,8,6,2,1]
// Out: [3,7,4,8,2,6,1]

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function zigzag(arr) {
  for (let i = 0; i < arr.length - 1; i++) {

    // even index → arr[i] < arr[i+1]
    if (i % 2 === 0 && arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }

    // odd index → arr[i] > arr[i+1]
    if (i % 2 === 1 && arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
}

