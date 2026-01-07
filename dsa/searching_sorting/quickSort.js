              //            [5,3,8,2,1]
              //                 |
              //              pivot=1
              //                 |
              //          []           [3,8,2,5]
              //                            |
              //                         pivot=5
              //                             |
              //                    [3,2]           [8]
              //                             |
              //                         pivot=2
              //                             |
              //                       []        [3]

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}