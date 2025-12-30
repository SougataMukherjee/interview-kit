//Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.
// Time → 0    5    10   15   20   25   30 (overlap,can not attend all)
// M1:   [------------------------------]
// M2:        [-----]
// M3:              [-----]

// Time → 5    6    7    8    9    10   11   12   13   14   15 (no overlap,can attend all)
// M1:   [----------------]
// M2:                        [------------------------------]


function canAttendMeeting(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let prev = intervals[i - 1];// previous meeting
    let cur = intervals[i];// current meeting
    //check for overlap and if overlap detect
    if (prev[1] > cur[0]) return false;
  }

  return true;
}
console.log(canAttendMeeting([[0,30],[5,10],[15,20]]))// false
console.log(canAttendMeeting([[5,8],[9,15]]))// true