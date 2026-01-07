function topKFrequent(nums, k) {
  let map = {};
  //Count frequency of each number
  nums.forEach(x => {
    if(map[x]){
        map[x]+=1
    }else{
        map[x]=1
    }
});
  //Convert the frequency map into a list of numbers, sort them by frequency and pick 1st k elements
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
}

console.log(topKFrequent([1,1,1,2,2,3], 2)); // ["1","2"]