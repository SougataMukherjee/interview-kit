// Time →
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18

//     [-----1------3-----]
//           [--------2-----------6--------]

//                           [------8-------10------]

//                                               [------15-------18------]

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  //loop through each interval one by one
  for (let cur of intervals) {
    let prev = res[res.length - 1];
  //res is empty or previous interval ends before current starts then no overlap
    if (!res.length || prev[1] < cur[0]) {
        res.push(cur);
    } else {
      //current starts before previous ends then overlap exist
      prev[1] = Math.max(prev[1], cur[1]);
    }
  }
  return res;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))//[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]