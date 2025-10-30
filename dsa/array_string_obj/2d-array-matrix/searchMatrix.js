function searchMatrix(matrix, target) {
  for (let row of matrix)
    if (row.includes(target)) return true;
  return false;
}
console.log(searchMatrix([[1,2,3],[4,5,6]], 5)); // true