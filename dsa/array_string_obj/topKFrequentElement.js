function topKFrequent(nums, k) {
  let map = {};

  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
  }

  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
}

topKFrequent([1,1,1,2,2,3], 2); // ["1","2"]