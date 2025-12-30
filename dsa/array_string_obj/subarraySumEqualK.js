function subarraySum(nums, k) {
  let n=nums.length, count = 0;
 //start and end boundary using i and j
  for (let i=0;i<n;i++) {
    let sum=0;
    for(let j=i;j<n;j++){
	    sum+=nums[j];// add current element to sum
      
      //if current subarray sum equal to k
	    if(sum === k){
        count++;
      }
	  }
  }
  return count;
}
console.log(subarraySum([1,1,1],2)) //2
console.log(subarraySum([1,2,3],3)) //2