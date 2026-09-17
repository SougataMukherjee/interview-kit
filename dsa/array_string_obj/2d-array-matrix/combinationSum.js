function combinationSum(arr,target) {
  const result = [];
  const subsets = [{ nums: [], sum: 0 }];
[
  for (const num of arr) {
    const size = subsets.length;
    for (let i = 0; i < size; i++) {
     const newSubset = {
        nums: [...subsets[i].nums, num],
        sum: subsets[i].sum + num
    };
    if (newSubset.sum === target) {
        result.push(newSubset.nums);
    }
    subsets.push(newSubset);
    }
  }

  return result;
}

console.log(combinationSum([1, 2, 3, 4, 6],6));//[ [ 1, 2, 3 ], [ 2, 4 ], [ 6 ] ]