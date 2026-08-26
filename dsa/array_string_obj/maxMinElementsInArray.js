//Find max and min in array(Math.max(...arr), Math.min(...arr))
function getMinMax(arr) {
  let min = Infinity,
    max = -Infinity;
    
  if (!Array.isArray(arr) || arr.some(x => !Number.isFinite(x))) return false;
  if (arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(getMinMax([5,2,8,1]))