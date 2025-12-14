function convertToWave(arr) {
  //we increment i by 2 because we swap elements in pairs
  //we check i+1 < length to avoid accessing out-of-bound elements.
  for (let i = 0; i + 1 < arr.length; i += 2)
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap(arr[i],arr[i+1])
  return arr;
}