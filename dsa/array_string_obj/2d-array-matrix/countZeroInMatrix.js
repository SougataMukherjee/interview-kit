function countZero(mat) {
  let count = 0;
  for (let row of mat)
    for (let x of row)
      if (x === 0) count++;
  return count;
}