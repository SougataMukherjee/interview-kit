// You are organizing a series of events, each with a specific start and end time, given as events[i] = [start_i, end_i]. Each event has a unique start time.
// For each event i, you need to find the next possible event j such that:

// The start time of event j is greater than or equal to the end time of event i (i.e., startj>=endi)
// Among such events, you must select the event with the earliest start time.
// If no such event exists, return -1 for that event.

// Input (original indices):
// i0: [3,4]
// i1: [2,3]
// i2: [1,2]
//
// Time → 1    2    3    4
// i2 : [1----2]----------------
// i1 : -----[2----3]-----------
// i0 : ----------[3----4]------

function nextPossibleEvent(events) {
  const intervals = events.map((e, i) => [e[0], e[1], i]);// [start, end, originalIndex]
  intervals.sort((a, b) => a[0] - b[0]);

  const result = Array(events.length).fill(-1);

  for (const [start, end, originalIdx] of intervals) {
    // find first interval with start >= end
    let lo = 0, hi = intervals.length - 1, found = -1;

    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (intervals[mid][0] >= end) {
        found = intervals[mid][2]; // original index of the "next" interval
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    result[originalIdx] = found;
  }

  return result;
}
console.log(nextPossibleEvent([[3,4],[2,3],[1,2]])); // [-1, 0, 1]