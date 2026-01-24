// Time →
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18

//     [-----1------3-----]
//           [--------2-----------6--------]

//                           [------8-------10------]

//                                               [------15-------18------]

/*
Initial Intervals:
[[1,3], [2,6], [8,10], [15,18]]

Step 1: Sort by start (already sorted)

Result = []
prev = [1,3]

-----------------------------------
Compare prev = [1,3] with curr = [2,6]

Check overlap:
prev[1] >= curr[0]
3 >= 2  ✅ YES

Merge:
prev[1] = max(3,6) = 6
prev becomes → [1,6]

-----------------------------------
Compare prev = [1,6] with curr = [8,10]

Check overlap:
6 >= 8 ❌ NO

Push prev to result:
Result = [[1,6]]

Update prev:
prev = [8,10]

-----------------------------------
Compare prev = [8,10] with curr = [15,18]

Check overlap:
10 >= 15 ❌ NO

Push prev to result:
Result = [[1,6], [8,10]]

Update prev:
prev = [15,18]

-----------------------------------
End of loop → push last prev

Final Result:
[[1,6], [8,10], [15,18]]
*/

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);//[ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]
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