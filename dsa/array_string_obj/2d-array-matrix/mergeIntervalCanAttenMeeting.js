//Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

function canAttendMeeting(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let prev = intervals[i - 1];
    let cur = intervals[i];

    if (prev[1] > cur[0]) return false;
  }

  return true;
}
console.log(canAttendMeeting([[0,30],[5,10],[15,20]]))// false
console.log(canAttendMeeting([[5,8],[9,15]]))// true