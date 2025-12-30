let arr=[4,1,8,2];
console.log(arr.sort((a,b)=>a-b)); // [1,2,4,8]

//if say sort ascending except k
function sortExceptK(arr, k) {
  const nums = arr.filter(x => x !== k).sort((a, b) => a - b);
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== k) {
      arr[i] = nums[j++];
    }
  }
  return arr;
}
