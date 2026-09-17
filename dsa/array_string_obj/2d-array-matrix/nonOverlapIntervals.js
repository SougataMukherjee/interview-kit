
function nonOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];

    if (cur[0] < prev[1]) { // overlap
      count++;

      // keep the interval with smaller end
      if (cur[1] < prev[1]) {
        prev = cur;
      }
    } else {
      prev = cur;
    }
  }

  return count;
}
console.log(nonOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // 1
console.log(nonOverlapIntervals([[1,2],[1,2],[1,2]])) //2