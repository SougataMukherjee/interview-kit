function rob(nums){
  let prev=0, curr=0;

  for(let n of nums){
    let next = Math.max(curr, prev+n);
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(rob([1,2,3,1]));// 4
console.log(rob([2,7,9,3,1]));// 12