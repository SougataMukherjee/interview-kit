function topKFrequent(nums, k) {
  let map = {};
  //Count frequency of each number
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
  }
  //Convert the frequency map into a list of numbers, sort them by frequency and pick 1st k elements
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
}

topKFrequent([1,1,1,2,2,3], 2); // ["1","2"]