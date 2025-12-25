function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  for (let cur of intervals) {
    let prev = res[res.length - 1];

    if (!res.length || prev[1]<cur[0]) {
        res.push(cur);
    } else {
      prev[1] = Math.max(prev[1], cur[1]);
    }
  }
  return res;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))//[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]