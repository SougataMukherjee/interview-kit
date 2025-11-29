let arr=[4,1,8,2];
console.log(arr.sort((a,b)=>a-b)); // [1,2,4,8]

//if say sort ascending except -1
function sortExceptMinusOne(arr) {
  let nums = arr.filter(x => x !== -1).sort((a, b) => a - b);

  let index = 0;
  return arr.map(x => x === -1 ? -1 : nums[index++]);
}

console.log(sortExceptMinusOne([-1, 0, 3, -1, -2, -1]));//v