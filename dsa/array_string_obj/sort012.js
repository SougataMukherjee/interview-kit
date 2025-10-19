function sort012(arr) {
  let count0 = 0, count1 = 0, count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    else if (arr[i] === 1) count1++;
    else count2++;
  }
  let res = [];
  for (let i = 0; i < count0; i++) res.push(0);
  for (let i = 0; i < count1; i++) res.push(1);
  for (let i = 0; i < count2; i++) res.push(2);
  return res;
}