//logic:
// Sort the packets and find the minimum difference between max and min of every consecutive group of K packets.
// Indices: i, i+1, i+2, ..., i+(m-1)
// number of students = m

// First packet index (min elements) = i
// Last packet index (max elements) = i + (m - 1)

// Sorted Chocolate Packets:
// Index:    0   1   2   3   4   5   6    7
//         --------------------------------
// Packets: | 1 | 3 | 4 | 7 | 9 | 9 | 12 | 56 |
//         --------------------------------
//          ------------------diff = 9-1
//                -----------------diff = 9-3
//                    -----------------diff = 12-4
//                        -------------------diff = 56-7

function minDiff(arr, m) {
  arr.sort((a,b)=> a-b);
  let min = Infinity;

  for (let i = 0; i + m - 1 < arr.length; i++) {
    min = Math.min(min, arr[i + m - 1] - arr[i]);
  }
  return min;
}

console.log(minDiff([3,4,1,9,56,7,9,12],5))//6
