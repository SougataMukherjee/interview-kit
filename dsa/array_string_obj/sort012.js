function sort012(arr) {
  let count0 = 0, count1 = 0, count2 = 0;

  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }

  return [
    ...Array(count0).fill(0),
    ...Array(count1).fill(1),
    ...Array(count2).fill(2)
  ];
}

console.log(sort012([2, 0, 1, 2, 1, 0]));// [0, 0, 1, 1, 2, 2]